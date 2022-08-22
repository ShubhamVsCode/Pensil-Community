import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

import "./App.css";
import FAQ from "./components/FAQ";
import GroupList from "./components/GroupList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Owner from "./components/Owner";
import Testimonial from "./components/Testimonial";
import { database } from "./firebase/firebaseConfig";

import { Link } from "react-router-dom";

function App() {
  // State of Nav, Hero, Owner---------
  const [value, setValue] = useState({
    communityName: "",

    description: "",
    highlightedDescription: "",

    ownerName: "",
    ownerDescription: "",

    youtubeLink: "",
  });
  // destructuring state
  const {
    communityName,
    description,
    highlightedDescription,
    ownerName,
    ownerDescription,
    youtubeLink,
  } = value;
  // handling changes
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  // Group-------
  const [group, setGroup] = useState({
    groupName: "",
    groupDescription: "",
  });
  const handleGroup = (name) => (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };
  const { groupName, groupDescription } = group;

  // Testimonial-------
  const [testimonial, setTestimonial] = useState({
    testimonialName: "",
    testimonialDescription: "",
    company: "",
    college: "",
  });
  const handleTestimonialName = (name) => (e) => {
    setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
  };
  const { testimonialName, testimonialDescription, company, college } =
    testimonial;

  // FAQ-------
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
  });
  const { question, answer } = faq;
  const handleFaq = (name) => (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  // reference to the database
  const heroReference = ref(database, "value/hero");
  const groupReference = ref(database, "value/group");
  const testimonialReference = ref(database, "value/testimonial");
  const faqReference = ref(database, "value/faq");

  // write data to the database
  const writeData = () => {
    // setting hero data in firebase
    set(heroReference, {
      communityName,
      description,
      highlightedDescription,
      ownerName,
      ownerDescription,
      youtubeLink,
    });

    // setting group data in firebase
    set(groupReference, {
      groupName,
      groupDescription,
    });

    // setting testimonial data in firebase
    set(testimonialReference, {
      testimonialName,
      testimonialDescription,
      company,
      college,
    });

    // setting faq data in firebase
    set(faqReference, {
      question,
      answer,
    });
  };

  // Handle Submit--------
  const handleSubmit = (event) => {
    event.preventDefault();

    writeData();
    console.log("data submitted successfully");

    getData();
    console.log("data retrieved successfully");
  };

  // Get Data from Firebase--------
  const getData = () => {
    onValue(heroReference, (snapshot) => {
      const heroData = snapshot.val();
      setValue({ ...heroData });
    });

    onValue(groupReference, (snapshot) => {
      const groupData = snapshot.val();
      setGroup({ ...groupData });
    });

    onValue(testimonialReference, (snapshot) => {
      const testimonialData = snapshot.val();
      setTestimonial({ ...testimonialData });
    });

    onValue(faqReference, (snapshot) => {
      const faqData = snapshot.val();
      setFaq({ ...faqData });
    });
  };

  // get data from firebase on component mount
  useEffect(() => {
    getData();
    console.log("data retrieved successfully");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="font-[Poppins] scroll-smooth grid grid-cols-4 relative bg-violet-50">
      {/* Sidebar */}
      <div className="fixed hidden w-1/4 min-h-screen col-span-1 py-4 text-sm text-center text-white sm:block bg-slate-800">
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center justify-between mx-5">
              <label htmlFor="communityName">Community Name</label>
              <input
                type="text"
                name="communityName"
                className="px-4 py-3 mx-2 rounded-md bg-slate-500"
                onChange={handleChange("communityName")}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleChange("description")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="highlightedDescription">Highlight</label>
            <input
              type="text"
              name="highlightedDescription"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleChange("highlightedDescription")}
            ></input>
          </div>

          <div className="flex items-center justify-between mx-5">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleChange("ownerName")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="ownerDescription">Owner Bio</label>
            <input
              type="text"
              name="ownerDescription"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleChange("ownerDescription")}
            ></input>
          </div>

          <div className="flex items-center justify-between mx-5">
            <label htmlFor="youtubeLink">Video Link</label>
            <input
              type="text"
              name="youtubeLink"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleChange("youtubeLink")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="groupName">Group Name</label>
            <input
              type="text"
              name="groupName"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleGroup("groupName")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="groupDescription">Group Description</label>
            <input
              type="text"
              name="groupDescription"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleGroup("groupDescription")}
            ></input>
          </div>

          <div className="flex items-center justify-between mx-5">
            <label htmlFor="testimonialName">Testimonial Name</label>
            <input
              type="text"
              name="testimonialName"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleTestimonialName("testimonialName")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="testimonialDescription">Testimonial</label>
            <input
              type="text"
              name="testimonialDescription"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleTestimonialName("testimonialDescription")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleTestimonialName("company")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="college">College</label>
            <input
              type="text"
              name="college"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleTestimonialName("college")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="question">FAQ Question</label>
            <input
              type="text"
              name="question"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleFaq("question")}
            ></input>
          </div>
          <div className="flex items-center justify-between mx-5">
            <label htmlFor="answer">FAQ Answer</label>
            <input
              type="text"
              name="answer"
              className="px-4 py-3 mx-2 rounded-md bg-slate-500"
              onChange={handleFaq("answer")}
            ></input>
          </div>
          <button
            className="block px-4 py-2 mx-auto duration-300 border-2 rounded-full hover:bg-violet-900 border-violet-500 "
            type="submit"
          >
            Send data to database
          </button>
          <div className="flex justify-center gap-2">
            <Link to="/app">
              <button
                className="block px-8 py-2 duration-300 border-2 rounded-full hover:bg-gradient-to-bl hover:from-violet-500 border-violet-500 "
                type="submit"
              >
                Preview
              </button>
            </Link>

            <Link to="/app">
              <button
                className="block px-8 py-2 duration-300 border-2 rounded-full hover:bg-gradient-to-br hover:from-violet-500 border-violet-500 "
                type="submit"
              >
                Publish
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/* Actual Website */}
      <div className="col-span-4 sm:col-start-2 sm:col-span-3 bg-violet-50">
        {/* Navbar */}
        <Navbar communityName={communityName} />

        {/* Hero Section */}
        <Hero
          communityName={communityName}
          description={description}
          highlightedDescription={highlightedDescription}
        />

        {/* Owner Section */}
        <Owner
          ownerName={ownerName}
          ownerDescription={ownerDescription}
          youtubeLink={youtubeLink}
        />

        {/* Group Section */}
        <GroupList groupName={groupName} groupDescription={groupDescription} />

        {/* Testimonial Section */}
        <Testimonial
          testimonialName={testimonialName}
          testimonialDescription={testimonialDescription}
          company={company}
          college={college}
        />

        {/* FAQ Section */}
        <FAQ question={question} answer={answer} />
      </div>
    </div>
  );
}

export default App;
