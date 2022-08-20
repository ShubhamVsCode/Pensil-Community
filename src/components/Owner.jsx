import { useState } from "react";
import hiteshSir from "../assets/hiteshSir.jpg";

import youtube from "../assets/social-icons/youtube.png";
import linkedin from "../assets/social-icons/linkedin.png";
import twitter from "../assets/social-icons/twitter.png";
import instagram from "../assets/social-icons/instagram.png";

const Owner = () => {
  // Editing values
  const [values, setValues] = useState({
    name: "Hitesh Choudhary",
    description:
      "Teacher and coder who is trying to solve some problems via  iNeuron, Learnyst, Pensil and findcoder. CTO at iNeuron",
  });

  const { name, description } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setValues({ ...values, error: false });
  //   signup({ name, email, password })
  //     .then((data) => {
  //       if (data.error) {
  //         setValues({ ...values, error: data.error, success: false });
  //       } else {
  //         setValues({
  //           ...values,
  //           name: "",
  //           email: "",
  //           password: "",
  //           error: "",
  //           success: true,
  //         });
  //       }
  //     })
  //     .catch(console.log("Error in signup"));
  // };

  // console.log("Owner: " + owner);
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
          <input
            value={name}
            onChange={handleChange("name")}
            className="my-0 mb-5 text-4xl font-bold text-center bg-transparent outline-none md:w-96 lg:text-left"
          />
          <textarea
            className="h-20 max-w-xl text-center bg-transparent outline-none md:w-96 lg:text-left"
            value={description}
            onChange={handleChange("description")}
          />

          {/* <p className="max-w-2xl">
            Teacher and coder who is trying to solve some problems via
            <span className="font-bold">
              &nbsp; iNeuron, Learnyst, Pensil and findcoder. CTO at iNeuron
            </span>
          </p> */}

          {/* Social Link */}
          <div className="flex self-center gap-8 my-8 overflow-hidden lg:self-start">
            <a href="/" className="relative flex group">
              <img className="h-8" src={instagram} alt="" />
              <input
                className="absolute w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 -bottom-8 -left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@hiteshchoudharyofficial"
              />
            </a>
            <a href="/" className="relative flex group">
              <img className="h-8" src={linkedin} alt="" />
              <input
                className="absolute w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 -bottom-8 -left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@hiteshchoudhary"
              />
            </a>
            <a href="/" className="relative flex group">
              <img className="h-8" src={twitter} alt="" />
              <input
                className="absolute w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 -bottom-8 -left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@Hiteshdotcom"
              />
            </a>
            <a href="/" className="relative flex group">
              <img className="h-8" src={youtube} alt="" />
              <input
                className="absolute w-56 font-semibold duration-300 bg-transparent outline-none opacity-0 -bottom-8 -left-10 group-hover:translate-x-10 group-hover:opacity-100"
                type="text"
                value="@HiteshChoudharydotcom"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-0 xl:my-32">
        <h1 className="my-16 text-4xl font-bold text-center">
          Introduction to CoderCommunity.io
        </h1>
        <iframe
          src="https://www.youtube.com/embed/LOjU3jWiXtI"
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
