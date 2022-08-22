import hiteshSir from "../assets/hiteshSir.jpg";

import youtube from "../assets/social-icons/youtube.png";
import linkedin from "../assets/social-icons/linkedin.png";
import twitter from "../assets/social-icons/twitter.png";
import instagram from "../assets/social-icons/instagram.png";

const Owner = ({ ownerName, ownerDescription, youtubeLink }) => {
  let cutFrom = youtubeLink.lastIndexOf("/") + 1;
  let youtubeId =
    youtubeLink.substring(cutFrom) === ""
      ? "LOjU3jWiXtI"
      : youtubeLink.substring(cutFrom);

  const youtubeEmbedLink = `https://www.youtube.com/embed/${youtubeId}`;
  console.log(youtubeEmbedLink);

  return (
    <div className="mx-auto my-32 max-w-7xl">
      <h1 className="my-16 text-4xl font-bold text-center">Community Owner</h1>
      <div className="flex flex-col items-center justify-around gap-y-10 lg:flex-row">
        <img
          className="p-1 duration-300 shadow-xl md:p-0 rounded-xl xl:ml-4 lg:max-w-2xl xl:hover:scale-105 shadow-purple-200"
          src={hiteshSir}
          alt=""
        />

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
            <a href="/" className="relative flex group">
              <img className="h-8" src={instagram} alt="" />
              <input
                className="absolute hidden w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 md:inline-block -bottom-8 -left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@hiteshchoudharyofficial"
              />
            </a>
            <a href="/" className="relative flex group">
              <img className="h-8" src={linkedin} alt="" />
              <input
                className="absolute hidden w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 md:inline-block -bottom-8 -left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@hiteshchoudhary"
              />
            </a>
            <a href="/" className="relative flex group">
              <img className="h-8" src={twitter} alt="" />
              <input
                className="absolute hidden w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 md:inline-block -bottom-8 md:-left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@Hiteshdotcom"
              />
            </a>
            <a href="/" className="relative flex group">
              <img className="h-8" src={youtube} alt="" />
              <input
                className="absolute hidden w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 md:inline-block -bottom-8 md:-left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@HiteshChoudharydotcom"
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
          src={youtubeEmbedLink}
          className="w-full rounded-xl shadow-2xl md:w-[80%] mx-auto max-w-7xl aspect-video"
          title="YouTube video player"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Owner;
