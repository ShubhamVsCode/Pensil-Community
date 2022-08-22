import hero from "../assets/coderCommunity.jpg";

// firebase image upload import
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";

const Hero = ({
  communityName,
  description,
  highlightedDescription,
  preview,
  user,
}) => {
  // firebase image upload
  const [image, setImage] = useState(null);
  const [heroImageURL, setHeroImageURL] = useState("");

  const imageRef = storageRef(storage, `images/heroImage`);

  // uploading image
  const uploadImage = () => {
    if (image == null) return;
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef).then((url) => {
          setHeroImageURL(url);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [imageDownloaded, setImageDownloaded] = useState();

  // downloading image on mounting
  useEffect(() => {
    getDownloadURL(imageRef).then((url) => {
      setHeroImageURL(url);
    });
    setImageDownloaded(true);
  }, [heroImageURL, setHeroImageURL, imageRef]);

  return (
    <div>
      <div className="py-20 text-center xl:py-40 lg:text-left hero bg-violet-100">
        <div className="flex-col gap-10 xl:gap-20 hero-content lg:flex-row-reverse">
          <div className="group">
            {imageDownloaded && (
              <img
                src={heroImageURL || hero}
                alt="Hero"
                className="duration-300 rounded-lg shadow-2xl hover:scale-105 md:max-w-xl 2xl:max-w-2xl"
              />
            )}

            {/* image upload button */}
            {!preview && user && (
              <div className="hidden p-1 mt-8 duration-200 bg-purple-300 rounded-full sm:block group hover:bg-purple-400 w-fit h-fit">
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  name="image"
                  className="text-center bg-purple-300 border-2 border-r-0 rounded-l-full file:px-5 file:py-3 file:border-none file:bg-transparent file:rounded-l-full file:"
                />
                <button
                  className="p-3 text-white duration-200 border-2 rounded-md rounded-r-full hover:bg-violet-500 bg-violet-400 border-violet-400"
                  onClick={uploadImage}
                >
                  Upload
                </button>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              {communityName || "Coder Community"}
            </h1>
            <p className="py-6">
              {description ||
                "Welcome to coder community. Post any of your doubt and there are other fellow coders along with our team to solve your doubts."}
              <br />
              <span className="px-1 text-lg font-medium bg-orange-300 ">
                {highlightedDescription ||
                  "You might be learning from any place, company or resource,We are here to help you."}
              </span>
              <br />
            </p>
            <button className="px-10 text-white rounded-full btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
