import Head from "next/head";
import Welcome from "../components/welcome";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import ContactForm from "../components/form";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Huseyin | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-20">
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
    </div>
  );
}
