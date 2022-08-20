import React from "react";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div>
        <h1 className="flex justify-center my-10 text-5xl font-bold text-center ">
          FAQs
        </h1>
      </div>
      <div className="space-y-3">
        <FAQCard
          Question="Can I join this community?"
          Answer="Yes you can and you should join this community, if you are a
              Programmer"
        />

        <FAQCard
          Question="I am learning from Udemy can i join this community?"
          Answer="Yes you can and you should join this community, Learn from anywhere
          and get help from here."
        />
        <FAQCard Question="Is it free?" Answer="Yes absolutely free for all." />
        <FAQCard
          Question="How can i join Paid Community?"
          Answer="Yes have to enroll in that particular course to be eligible for the Paid Community"
        />
      </div>
    </div>
  );
};

export default FAQ;
