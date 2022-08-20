import "./App.css";
import FAQ from "./components/FAQ";
import GroupList from "./components/GroupList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Owner from "./components/Owner";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="font-[Poppins] bg-violet-50">
      <div className="">
        <div className="h-screen ">
          <Navbar />
          <Hero />
        </div>
        <Owner />
        <GroupList />
        <Testimonial />
        <FAQ />
        <div className="h-screen"></div>
      </div>
    </div>
  );
}

export default App;
