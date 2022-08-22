import TestimonialCard from "./TestimonialCard";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

import doubleQuotes from "../assets/doubleQuotes.svg";

const Testimonial = ({
  testimonialName,
  testimonialDescription,
  company,
  college,
}) => {
  return (
    <>
      <div>
        <h1 className="flex justify-center mt-32 text-5xl font-bold text-center ">
          Testimonial
          <img
            className="relative w-12 pointer-events-none select-none opacity-30 -right-3 bottom-4"
            src={doubleQuotes}
            alt=""
          />
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-16 mx-auto mt-32 text-center md:grid-cols-2 lg:grid-cols-3 max-w-7xl place-content-center">
        <TestimonialCard
          image={person1}
          title={testimonialName || "Michael Smith"}
          description={
            testimonialDescription ||
            "I am working in a MNC and there i got many problems in my projects i got help from javascript community"
          }
          company={company || "Paytm"}
          college={college || "ISMT Bhopal"}
        />
        <TestimonialCard
          image={person2}
          title="Rohan Singh"
          description="I am a college student and i got help from DSA community and cracked the Razorpay Interview"
          company="Razorpay"
          college="NIT Allahabad"
        />
        <TestimonialCard
          image={person3}
          title="Abhinav Yadav"
          description="Helping in the Backend Development helps me a lot and boost my skills and I got offers from 10+ companies"
          college="LPU"
          company="Microsoft"
        />
      </div>
    </>
  );
};

export default Testimonial;
