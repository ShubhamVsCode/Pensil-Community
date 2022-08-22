import React from "react";
import check from "../assets/checked.png";

const AboutCom = () => {
  return (
    <div className="mx-auto my-32 max-w-7xl">
      <h1 className="my-16 text-4xl font-bold text-center">
        About Our Community
      </h1>

      <div className="flex w-fit mx-auto flex-col justify-center ">
        <p className="md:text-lg text-base  bg-purple-100 w-fit rounded-full pr-4 pl-1 mb-4">
          <img className="w-6 my-auto inline" src={check} alt="" /> Our Coder
          Community Solves Many Problem
        </p>
        <p className="md:text-lg text-base  bg-purple-100 w-fit rounded-full pr-4 pl-1 mb-4">
          <img className="w-6 my-auto inline" src={check} alt="" /> Learn from
          anywhere, Get help from here
        </p>
        <p className="md:text-lg text-base  bg-purple-100 w-fit rounded-full pr-4 pl-1 mb-4">
          <img className="w-6 my-auto inline" src={check} alt="" /> Make
          connection to the community
        </p>
        <p className="md:text-lg text-base  bg-purple-100 w-fit rounded-full pr-4 pl-1 mb-4">
          <img className="w-6 my-auto inline" src={check} alt="" /> Get support
          to all of your problems
        </p>
        <p className="md:text-lg text-base  bg-purple-100 w-fit rounded-full pr-4 pl-1 mb-4">
          <img className="w-6 my-auto inline" src={check} alt="" /> Community
          around Programming
        </p>
        <p className="md:text-lg text-base  bg-purple-100 w-fit rounded-full pr-4 pl-1 mb-4">
          <img className="w-6 my-auto inline" src={check} alt="" /> Answer of
          all your questions
        </p>
        <p className="md:text-lg text-base  bg-purple-100 w-fit rounded-full pr-4 pl-1 mb-4">
          <img className="w-6 my-auto inline" src={check} alt="" /> Ask your
          questions openly
        </p>
        <p className="md:text-lg text-base  bg-purple-100 w-fit rounded-full pr-4 pl-1 mb-4">
          <img className="w-6 my-auto inline" src={check} alt="" /> Get to know
          more people
        </p>
      </div>
    </div>
  );
};

export default AboutCom;
