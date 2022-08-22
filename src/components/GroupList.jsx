import NuemorphicCard from "./NeumorphicCard";
import cloud from "../assets/02cloud.jpeg";
import backend from "../assets/04backend.jpeg";
import jspaid from "../assets/05jspaid.jpeg";
import js from "../assets/06js.jpeg";
import db from "../assets/07db.jpeg";
import java from "../assets/08java.jpeg";
import dsa from "../assets/11dsa.jpeg";
import frontend from "../assets/11frontend.jpeg";

const GroupList = ({ groupName, groupDescription }) => {
  return (
    <>
      <h1 className="my-16 text-4xl font-bold text-center">
        Groups in Our Community
      </h1>
      <div class="grid xl:grid-cols-4 place-content-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 max-w-7xl mx-auto gap-y-10 md:gap-x-5 md:gap-y-5 xl:gap-x-10 xl:gap-y-16 ">
        <NuemorphicCard
          image={js}
          title={groupName || "Javascript Community"}
          description={
            groupDescription ||
            "Get Started with Javascript and build amazing websites with javascript and showcase"
          }
          members="1051"
        />
        <NuemorphicCard
          image={java}
          title="Java Community"
          description="Learn and build more stuff with java and help around community"
          members="754"
        />
        <NuemorphicCard
          image={jspaid}
          title="Javascript Paid Bootcamp | Pro"
          description="Live Javascript Bootcamp by Hitesh Choudhary"
          members="99"
          paid="Private"
        />
        <NuemorphicCard
          image={dsa}
          title="Data Structures and Algorithms"
          description="Help eachother with data structures and algorithms"
          members="1244"
        />
        <NuemorphicCard
          image={cloud}
          title="Cloud Community"
          description="Cloud is developing day by day it all requires constant learning so keep learing in public"
          members="458"
        />
        <NuemorphicCard
          image={backend}
          title="Data Structures and Algorithms"
          description="Help eachother with data structures and algorithms"
          members="945"
        />
        <NuemorphicCard
          image={frontend}
          title="Frontend Community"
          description="Create with any technologies HTML CSS React Vue Angular and get help from here"
          members="1435"
        />
        <NuemorphicCard
          image={db}
          title="Database Community"
          description="Community and Programming is a great thing share your knowledge with others"
          members="1244"
        />
      </div>
    </>
  );
};

export default GroupList;
