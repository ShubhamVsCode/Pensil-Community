import hero from "../assets/coderCommunity.jpg";

const Hero = () => {
  return (
    <div>
      <div className="py-20 text-center xl:py-40 lg:text-left hero bg-violet-100">
        <div className="flex-col gap-10 xl:gap-20 hero-content lg:flex-row-reverse">
          <img
            src={hero}
            alt="Hero"
            className="rounded-lg shadow-2xl md:max-w-xl 2xl:max-w-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Coder Community</h1>
            <p className="py-6">
              Welcome to coder community. <br />
              <span className="px-1 text-lg font-medium bg-orange-300 ">
                You might be learning from any place, company or resource,We are
                here to help you.
              </span>
              <br />
              Post any of your doubt and there are other fellow coders along
              with our team to solve your doubts.
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
