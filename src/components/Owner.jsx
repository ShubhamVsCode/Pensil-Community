import { useState } from "react";
import hiteshSir from "../assets/hiteshSir.jpg";
const Owner = () => {
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
      <div className="flex flex-col items-center gap-y-10 justify-evenly lg:flex-row">
        <img
          className="p-1 duration-300 rounded-lg shadow-xl xl:ml-4 lg:max-w-2xl xl:hover:scale-105 shadow-purple-200"
          src={hiteshSir}
          alt=""
        />
        <div className="flex flex-col items-center w-80">
          <input
            value={name}
            onChange={handleChange("name")}
            className="my-0 mb-5 text-4xl font-bold text-center bg-transparent outline-none w-96 lg:text-left"
          />
          <textarea
            className="h-20 max-w-xl text-center bg-transparent outline-none w-96 lg:text-left"
            value={description}
            onChange={handleChange("description")}
          />

          {/* <p className="max-w-2xl">
            Teacher and coder who is trying to solve some problems via
            <span className="font-bold">
              &nbsp; iNeuron, Learnyst, Pensil and findcoder. CTO at iNeuron
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Owner;
