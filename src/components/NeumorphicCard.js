import "../css/neumorphicCard.css";

const NuemorphicCard = ({
  image,
  title,
  members,
  description,
  paid = "Open for all",
}) => {
  return (
    <div className="relative w-auto max-w-sm p-4 mx-auto space-y-4 duration-200 hover:h-80 hover:-mt-10 card group h-80 2xl:h-72">
      <img
        src={image}
        className="duration-300 group-hover:scale-110 rounded-xl"
        alt=""
      />
      <h1 className="text-xl font-semibold ">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <p className="absolute font-medium text-orange-500 duration-300 opacity-0 group-hover:opacity-100 left-6 bottom-4">
        🙎‍♂️{members}
      </p>
      <p className="absolute text-green-600 duration-300 opacity-0 group-hover:opacity-100 right-6 bottom-4">
        {paid}
      </p>
    </div>
  );
};

export default NuemorphicCard;
