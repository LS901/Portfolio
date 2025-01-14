import React, { useState, useEffect } from 'react';
import { User } from "@nextui-org/user";
import AnimatedText from "@/components/AnimatedText";
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Recommendations = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [useCenterMode, setUseCenterMode] = useState(true);
    const testimonials = [
        {
            name: "Julio Alves",
            description: "Lead Front End Engineer - ITV",
            content: `I had the pleasure of working closely with Lewis for 2 years and have witnessed his remarkable growth as a frontend developer.
                Lewis has proven to be a reliable and resourceful member of the team, continuously pushing himself to improve and help the team reach its goals.
                Beyond his technical skills, Lewis excels in communication and collaboration, always maintaining a positive attitude and a proactive approach.
                I highly recommend Lewis for any frontend development positions due to his technical skills, composure, and growth potential.`,
            className: 'bg-orange/80'
          },
          {
            name: "Emily Giblett",
            description: "Core Front End Engineer - ITV",
            content: `Lewis is an absolute asset to our team, and it's a joy to work alongside him. He is incredibly diligent,
                patient and has great attention to detail, making him an excellent pairing companion.
                I've learnt a lot from our time working together, and I have no doubt that Lewis will make a similarly
                impactful contribution to any other engineering roles that he takes on in the future.`,
            className: 'bg-orange/80'
          },
          {
            name: "Iain Smith",
            description: "Head Of Product - News - ITV",
            content: `Lewis has played a vital role in building ITV News' innovative digital services,
                including our market-leading news proposition on our ITVX streaming platform.
                He's a very skilled front-end developer who delivers high quality solutions that are used by millions of people.
                His work is of an excellent standard, and he has the ability to turn his hand to any challenge presented to him,
                even with tight deadlines. Lewis combines these skills with a passion for detail, and contributes great ideas
                for product development. Alongside this he's thoughtful and a pleasure to work with in the team -
                he works well with all of his colleagues, he's fun and supportive of others.`,
            className: 'bg-orange/80'
          },
          {
            name: "Peter Hammans",
            description: "Senior UI Engineer - HDRUK",
            content: `Lewis worked in our team as a user interface developer at health data research uk with ReactJS and NextJS. He worked out our authentication / registration with in keycloak which was a new technology, as well as many other components both contributing to our component library and more complex features within the site. The whole project was on a very tight schedule so it was all hands to the pumps, but he turned round alot of quality work in a short space of time and also stayed in regular contact whether relating to work or more generally socially, which as a remote team are essential qualities to have. It's a real shame for him to be leaving us!`,
            className: 'bg-blue-300'
          }
    ];

    return (
        <div className='bg-lightGrey p-8 w-screen'>
            <AnimatedText 
                text='Testimonials' 
                className='font-rubik font-bold laptop:!text-2xl !text-3xl w-full text-center mb-8' 
            />
            <Carousel 
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6000}
                    centerMode={true}
                    emulateTouch={true}
                    swipeable={true}
                    className="custom-carousel"
                    selectedItem={currentSlide}
                    onChange={setCurrentSlide}
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='px-4 pb-10'>
                        <motion.div 
                            className='p-8 rounded-lg shadow-lg bg-white'
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <User
                                name={testimonial.name}
                                description={testimonial.description}
                                avatarProps={{
                                    name: testimonial.name.split(' ').map(n => n[0]).join(''),
                                    className: testimonial.className
                                }}
                            />
                            <p className='py-4 font-montLight'>{testimonial.content}</p>
                        </motion.div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Recommendations;