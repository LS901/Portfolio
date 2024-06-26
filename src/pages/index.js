import Head from 'next/head'
import Image from 'next/image'
import Layout from "@/components/Layout";
import profilePic from '../../public/images/profile/homepic.png'
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {motion} from "framer-motion";
import {LinkArrow} from "@/components/Icons";
import Transition from "@/components/Transition";

const MotionLink = motion(Link)
export default function Home() {
  return (
    <>
      <Head>
        <title>Lewis Saunders | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
        <Transition></Transition>
        <main className='flex items-center text-dark w-full min-h-screen'>
            <Layout className='pt-0 bg-opacity-0 tablet:p-8 laptop:pt-0'>
                <div className="flex items-center laptop:flex-col justify-center w-full">
                    <motion.div
                        className='w-4/12 laptop:w-7/12 laptop:m-12 tablet:!w-full tablet:!mt-8'
                        initial={{opacity:0}}
                        animate={{opacity:1, transition: { duration: 1 }}}>
                        <Image src={profilePic} alt="MyPicture" className='w-auto h-auto rounded-3xl shadow-2xl laptop:w-full laptop:inline-block'/>
                    </motion.div>
                    <motion.div className='w-1/2 laptop:w-fit pl-6 flex flex-col items-center self-center bg-earthFive/30 p-8 ml-8 rounded-lg shadow-2xl laptop:ml-0'
                                initial={{opacity:0}}
                                animate={{opacity:1, transition: { duration: 1 }}}>
                        <AnimatedText text="Hey! I'm Lewis" className=' !text-5xl !text-left pb-4 tablet:!text-center tablet:!text-2xl' delay={0.7}/>
                        <p className='pl-1.5 my-4 text-2xl tablet:!text-lg font-light'>Skilled, passionate & driven front end engineer. Open to work, and looking for his next professional venture. Let&apos;s connect and have a chat!
                        </p>
                        <div className='flex items-center self-start mt-2 laptop: self-center'>
                            <MotionLink href="/CV.pdf" target={"_blank"}
                            className='flex items-center bg-earthThree text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-earthOne
                            hover:border-gray-600
                            '
                            whileHover={{scale: 1.1}}
                            download={true}
                            >CV <LinkArrow className='w-6 ml-1'></LinkArrow></MotionLink>
                            <MotionLink href="mailto:lewissaunders100@gmail.com" target={'_blank'}
                            className='ml-4 text-lg font-medium capitalize text-dark underline'>Contact</MotionLink>
                    </div>
                    </motion.div>
                </div>
            </Layout>
        </main>
    </>
  )
}
