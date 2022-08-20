const TestimonialCard = ({ image, title, description, company, college }) => {
  return (
    <div className="relative p-5 pt-10 mb-10 duration-300 bg-purple-100 shadow-sm testimonial-card hover:shadow-2xl hover:bg-purple-200 group rounded-xl sm:mb-32 ">
      <img
        className="w-32 m-auto mb-5 -mt-28 border-[6px] group-hover:-translate-y-5  group-hover:scale-110 duration-300 dark:border-darkBackgroundColor border-violet-50 h-32 object-cover rounded-full"
        src={image}
        alt=""
      />
      <p className="text-xl font-semibold duration-300 name dark:text-darkTextColor dark:group-hover:text-darkTextColor group-hover:scale-110 group-hover:-translate-y-3">
        {title}
      </p>
      <p className="z-10 text-black/60 dark:text-darkSecTextColor dark:group-hover:text-darkSecTextColor group-hover:text-black">
        {description}
      </p>
      <div className="mt-2 font-medium">
        <p className="z-10 text-black">{company && `Company : ${company}`}</p>
        <p className="z-10 text-black">{college && `College : ${college}`}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
