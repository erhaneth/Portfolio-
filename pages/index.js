import Head from 'next/head'
import Image from 'next/image'
import Welcome from '../components/Welcome'
import About from '../components/About'




export default function Home() {
  return (
    <div >
      <Head>
        <title> Heg | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-20">

      <Welcome />
      <About />
      </div>
      
      
    </div>
  )
}
