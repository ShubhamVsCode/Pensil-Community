import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

import FAQ from "./components/FAQ";
import GroupList from "./components/GroupList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Owner from "./components/Owner";
import Testimonial from "./components/Testimonial";
import { database } from "./firebase/firebaseConfig";

const PreviewApp = () => {
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

  // Group-------
  const [group, setGroup] = useState({
    groupName: "",
    groupDescription: "",
  });
  // destructuring state
  const { groupName, groupDescription } = group;

  // Testimonial-------
  const [testimonial, setTestimonial] = useState({
    testimonialName: "",
    testimonialDescription: "",
    company: "",
    college: "",
  });

  const { testimonialName, testimonialDescription, company, college } =
    testimonial;

  // FAQ-------
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
  });
  const { question, answer } = faq;

  // reference to the database
  const heroReference = ref(database, "value/hero");
  const groupReference = ref(database, "value/group");
  const testimonialReference = ref(database, "value/testimonial");
  const faqReference = ref(database, "value/faq");

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
    <>
      <div className="font-[Poppins] scroll-smooth bg-violet-50">
        {/* Navbar */}
        <Navbar communityName={communityName} preview="true" />

        {/* Hero Section */}
        <Hero
          communityName={communityName}
          description={description}
          highlightedDescription={highlightedDescription}
          preview="true"
        />

        {/* Owner Section */}
        <Owner
          ownerName={ownerName}
          ownerDescription={ownerDescription}
          youtubeLink={youtubeLink}
          preview="true"
        />

        {/* Group Section */}
        <GroupList
          groupName={groupName}
          groupDescription={groupDescription}
          preview="true"
        />

        {/* Testimonial Section */}
        <Testimonial
          testimonialName={testimonialName}
          testimonialDescription={testimonialDescription}
          company={company}
          college={college}
          preview="true"
        />

        {/* FAQ Section */}
        <FAQ question={question} answer={answer} preview="true" />
      </div>
    </>
  );
};

export default PreviewApp;
