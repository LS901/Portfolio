import '../styles/globals.css'
import { Montserrat, Rubik } from "next/font/google"
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


export const rubik = Rubik({
    subsets: ["latin"],
    variable: "--font-rubik",
    weight: '500'
})
export const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont-light",
  weight: '400'
})

export default function App({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <style jsx global>{`
              :root {
                  --font-rubik: ${rubik.style.fontFamily};
                  --font-mont-light: ${mont.style.fontFamily};
              }
          `}</style>
          <div className={`${rubik.variable} ${mont.variable} w-screen min-h-screen flex flex-col bg-light`}>
              <a href="#main-content" className="skip-link">Skip to content</a>
              <NavBar />
              <div id="main-content" className="flex-1">
                  <Component {...pageProps} />
              </div>
              <Footer />
          </div>
      </>
  )
}
