import React from 'react'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const DownloadButtonWithImgSEction = () => {
    const sectionRef = useRef(null);


    useGSAP(() => {
        const el = sectionRef.current;
        const elements = el.querySelectorAll('img ,h1,h3,button');

        // animation for each elemnt and based on eachelement itself postion not on parents postions
        elements.forEach((item) => {
            gsap.fromTo((item), { opacity: 0, y: -10 },
                {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    ease: 'expo.inOut',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 98%',
                        //onEnter onLeave onEnterBack onLeaveBack, it is used to revrse the animation and play everytime
                        toggleActions: "play reverse play reverse"
                    }
                })
        })


    }, { scope: sectionRef })  //this is key , “Wait until this ref and its children exist, then apply animations safely.”


    return (
        <div ref={sectionRef}
            className='overflow-hidden gap-5 w-full px-[2vw] flex flex-col items-center lg:flex-row lg:gap-0 lg:items-start lg:justify-between py-10 '>

            <img className='w-[65%] h-fit object-cover sm:w-[55%] md:w-[65%] lg:w-[35%] xl:w-[37%] 2xl:w-[28%]' src="/sittingGirl.png" alt="" />

            <div className='w-full px-[4vw] flex flex-col items-center gap-4  pt-0 pb-2 md:pb-0 lg:pt-15 lg:max-w-1/2 lg:text-left lg:px-0'>

                <h1 className='font-[Helvetica] text-center text-5xl sm:6xl md:text-7xl lg:text-6xl xl:text-7xl xl:mt-[30px] 2xl:text-8xl' >Still Running,</h1>
                <h1 className='font-[Helvetica] text-5xl sm:text-6xl mb-10 text-center md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>Not Hunting</h1>

                <h3 className='text-sm font-[poppins]  lg:max-w-[48ch] text-left md:text-md xl:text-lg 2xl:text-xl'>Step into the vibrant and expansive world of the most anticipated game of the decade. Prepare to explore a dynamic open world  filled with unforgettable characters and thrilling adventures. Your journey begins in a place unlike any other—are you ready to experience the next evolution? Get ready for the ultimate experience.
                </h3>
                <button className='w-fit cursor-pointer  bg-amber-300 text-black font-bold text-lg px-2.5  py-1.5 rounded-lg outline-none font-[Helvetica] transition-all duration-130 ease-in-out
 active:scale-90 sm:text-lg md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl' >Download Now</button>

            </div>
        </div>
    )
}

export default DownloadButtonWithImgSEction

