import '../styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import profilePic from '../../public/images/profile/homepic.png'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: '400'
})
export default function App({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen bg-light`}>
              <NavBar />
            <Component {...pageProps} />
              <Footer></Footer>
          </main>
      </>
  )
}
