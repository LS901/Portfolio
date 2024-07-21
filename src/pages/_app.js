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
export const montserratLight = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont-light",
  weight: '400'
})

export const montserratHeavy = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont-heavy",
    weight: '700'
})

export default function App({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`${rubik.variable} w-full min-h-screen bg-background`}>
              <div className='p-6'>
                  <NavBar />
              </div>
            <Component {...pageProps} />
              <div className='p-6 bg-lightGrey'>
                 <Footer></Footer>
              </div>
          </main>
      </>
  )
}
