import hiteshSir from "../assets/hiteshSir.jpg";

// Social Icons
import youtube from "../assets/social-icons/youtube.png";
import linkedin from "../assets/social-icons/linkedin.png";
import twitter from "../assets/social-icons/twitter.png";
import instagram from "../assets/social-icons/instagram.png";

// firebase image upload import
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";

const Owner = ({ ownerName, ownerDescription, youtubeLink, preview, user }) => {
  // Handling youtube link making it embedable from any share link
  const [yt, setYt] = useState(youtubeLink);

  const getYoutubeLink = (youtubeLink) => {
    let cutFrom = youtubeLink.lastIndexOf("/") + 1;
    let youtubeId =
      youtubeLink.substring(cutFrom) === ""
        ? "LOjU3jWiXtI"
        : youtubeLink.substring(cutFrom);

    return `https://www.youtube.com/embed/${youtubeId}`;
  };

  // firebase image upload
  const [image, setImage] = useState(null);
  const [ownerImageURL, setOwnerImageURL] = useState("");

  const imageRef = storageRef(storage, `images/ownerImage`);

  // uploading image
  const uploadImage = () => {
    if (image == null) return;
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef).then((url) => {
          setOwnerImageURL(url);
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
      setOwnerImageURL(url);
    });
    setImageDownloaded(true);
  }, [ownerImageURL, setOwnerImageURL, imageRef]);

  return (
    <div className="mx-auto my-32 max-w-7xl">
      <h1 className="my-16 text-4xl font-bold text-center">Community Owner</h1>
      <div className="flex flex-col items-center justify-around gap-y-10 lg:flex-row">
        <div>
          {imageDownloaded && (
            <img
              className="p-1 duration-300 shadow-xl md:p-0 rounded-xl xl:ml-4 lg:max-w-2xl xl:hover:scale-105 shadow-purple-200"
              src={ownerImageURL || hiteshSir}
              alt=""
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
        {/* Name and Bio */}
        <div className="flex flex-col items-center w-96">
          <p className="my-0 mb-5 text-4xl font-bold text-center bg-transparent outline-none w-96 md:w-96 lg:text-left">
            {ownerName || "Hitesh Choudhary"}
          </p>
          <p className="max-w-2xl">
            {ownerDescription ||
              "Teacher and coder who is trying to solve some problems via iNeuron, Learnyst, Pensil and findcoder. CTO at iNeuron"}
          </p>

          {/* Social Link */}
          <div className="flex self-center gap-8 py-4 md:my-8 lg:self-start">
            <a
              href="https://www.instagram.com/hiteshchoudharyofficial/"
              className="relative flex group"
            >
              <img className="h-8" src={instagram} alt="" />
              <input
                className="absolute hidden w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 md:inline-block -bottom-8 -left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@hiteshchoudharyofficial"
                readOnly
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hiteshchoudhary/"
              className="relative flex group"
            >
              <img className="h-8" src={linkedin} alt="" />
              <input
                className="absolute hidden w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 md:inline-block -bottom-8 -left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@hiteshchoudhary"
                readOnly
              />
            </a>
            <a
              href="https://twitter.com/Hiteshdotcom"
              className="relative flex group"
            >
              <img className="h-8" src={twitter} alt="" />
              <input
                className="absolute hidden w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 md:inline-block -bottom-8 md:-left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@Hiteshdotcom"
                readOnly
              />
            </a>
            <a
              href="https://www.youtube.com/c/HiteshChoudharydotcom"
              className="relative flex group"
            >
              <img className="h-8" src={youtube} alt="" />
              <input
                className="absolute hidden w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 md:inline-block -bottom-8 md:-left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@HiteshChoudharydotcom"
                readOnly
              />
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-0 xl:my-32">
        <h1 className="my-16 text-3xl font-bold text-center">
          Introduction to CoderCommunity.io
        </h1>
        <iframe
          src={getYoutubeLink(yt)}
          className="w-full rounded-xl shadow-2xl md:w-[80%] mx-auto max-w-7xl aspect-video"
          title="YouTube video player"
          frameBorder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {!preview && user && (
          <div className="flex items-center justify-center mx-5 my-5">
            <label htmlFor="youtubeLink">Video Link</label>
            <input
              type="text"
              name="youtubeLink"
              className="px-4 py-3 mx-2 rounded-md bg-slate-400/70"
              onChange={(e) => {
                setYt(e.target.value);
              }}
            ></input>
          </div>
        )}
      </div>
    </div>
  );
};

export default Owner;
