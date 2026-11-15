import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectList from "../components/ProjectList";
import GithubActivity from "../components/GithubActivity";

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <Skills />
      <Experience />
      <GithubActivity/>
      <ProjectList />
    </div>
  );
}