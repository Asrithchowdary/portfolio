import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <Skills />
      <ProjectList />
    </div>
  );
}