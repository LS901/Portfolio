import React from 'react';
import AnimatedText from "@/components/AnimatedText";
import { User } from "@nextui-org/user";
import { motion } from 'framer-motion';

const variant = (delay) => {
return {
    hidden: { opacity: 0, y: -50},
    visible: {
        opacity: 1,
        y:0,
        transition: { delay }
        }
    }
}
const Recommendations = () => {
    return (
        <div className='bg-lightGrey'>
            <AnimatedText text='Testimonials' className='font-rubik font-bold laptop:!text-2xl !text-3xl px-16 w-full text-start mb-4' />
            <div className= 'w-full h-auto relative grid-cols-3 grid px-10 desktop:grid-cols-1 font-montLight'>
                <motion.div className='border border-dark/50 p-8 mr-4 rounded-lg shadow-lg desktop:m-4'
                            variants={variant(0)}
                            initial='hidden'
                            whileInView='visible'
                            viewport= {{ once: true }}>
                    <User
                        name="Julio Alves"
                        description="Lead Front End Engineer - ITV"
                        avatarProps={{
                          name: 'JA',
                          className: 'bg-orange/80'
                        }}
                    />
                    <p className='py-4'>
                        I had the pleasure of working closely with Lewis for 2 years and have witnessed his remarkable growth as a frontend developer.
                        Lewis has proven to be a reliable and resourceful member of the team, continuously pushing himself to improve and help the team reach its goals.
                        <br /> <br />
                        Beyond his technical skills, Lewis excels in communication and collaboration, always maintaining a positive attitude and a proactive approach.
                        I highly recommend Lewis for any frontend development positions due to his technical skills, composure, and growth potential.
                    </p>
                </motion.div>
                <motion.div className='border border-dark/50 p-8 mr-4 rounded-lg shadow-lg desktop:m-4'
                            variants={variant(0.3)}
                            initial='hidden'
                            whileInView='visible'
                            viewport= {{ once: true }}>
                    <User
                        name="Emily Giblett"
                        description="Core Front End Engineer - ITV"
                        avatarProps={{
                            name: 'EG',
                            className: 'bg-orange/80'
                        }}
                    />

                    <p className='py-4'>
                        Lewis is an absolute asset to our team, and it&apos;s a joy to work alongside him. He is incredibly diligent,
                        patient and has great attention to detail, making him an excellent pairing companion.
                        I&apos;ve learnt a lot from our time working together, and I have no doubt that Lewis will make a similarly
                        impactful contribution to any other engineering roles that he takes on in the future.
                    </p>
                </motion.div>
                <motion.div className='border border-dark/50 p-8 rounded-lg shadow-lg desktop:m-4'
                            variants={variant(0.6)}
                            initial='hidden'
                            whileInView='visible'
                            viewport= {{ once: true }}>
                    <User
                        name="Iain Smith"
                        description="Head Of Product - News - ITV"
                        avatarProps={{
                            name: 'IS',
                            className: 'bg-orange/80'
                        }}
                    />
                    <p className='py-4'>
                        Lewis has played a vital role in building ITV News&apos; innovative digital services,
                        including our market-leading news proposition on our ITVX streaming platform.
                        He&apos;s a very skilled front-end developer who delivers high quality solutions that are used by millions of people.
                        His work is of an excellent standard, and he has the ability to turn his hand to any challenge presented to him,
                        even with tight deadlines. Lewis combines these skills with a passion for detail, and contributes great ideas
                        for product development. Alongside this he&apos;s thoughtful and a pleasure to work with in the team -
                        he works well with all of his colleagues, he&apos;s fun and supportive of others.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Recommendations