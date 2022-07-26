import Head from 'next/head'
// import Welcome from '../components/welcome'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'


export default function Home() {
  return (
    <div >
      <Head>
        <title> Heg | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <div className="pt-20">

      {/* <Welcome /> */}
      <About />
      <Skills />
      <Projects />
      </div>
    </div>
  )
}
