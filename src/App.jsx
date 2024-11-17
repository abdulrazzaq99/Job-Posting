import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsPosting from "./components/JobsPosting";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />

      <Hero
        title="Become a React Dev"
        subtitle="Find the react job that fits your skills"
      />

      <HomeCards />

      <JobsPosting />

      <ViewAllJobs />
    </>
  );
};

export default App;
