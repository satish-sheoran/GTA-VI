import React, { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {

    useEffect(() => {
        let scrollDownTxt = document.querySelector('#scrollDownTxt');
        let txt = 'Scroll Down'.split('');
        let currIdx = -2;
        let currValue = '';
        function textAnimation() {
            currIdx++;
            currValue += txt[currIdx] || '';
            scrollDownTxt.textContent = `${currValue}`;
            if (currIdx === txt.length - 1) {
                currIdx = -2;
                currValue = '';
                setTimeout(textAnimation, 700);
            } else if (currIdx === -1) {
                setTimeout(textAnimation, 300);
            } else {
                setTimeout(textAnimation, 100);
            }


        }
        textAnimation();
    })

    return (
        <div className='absolute bottom-0 z-10 w-full px-[2vw] pt-0 h-[50px] items-center '>

            {/* scroll down and arrow */}
            <div id='arrow-scrollDiv' className='flex absolute  bottom-1 sm:bottom-2 lg:bottom-3.5 justify-start  w-fit items-center gap-2'>


                {/* below one is wrapper div which will wrap icon and the div with rotating border */}
                <div
                    onMouseEnter={() => {
                        let rotatingBorder = document.querySelector('#rotatingBorder');
                        rotatingBorder.style.animationName = 'none'
                    }}
                    onMouseLeave={() => {
                        let rotatingBorder = document.querySelector('#rotatingBorder');
                        rotatingBorder.style.animationName = 'spin'

                    }}
                    className="relative w-5 h-5 flex items-center justify-center cursor-pointer sm:w-7 sm:h-7 md:w-7.5 md:h-7.5 lg:w-8 lg:h-8">

                    {/*  Outer container for the rotating border effect */}
                    <div id='rotatingBorder' className="absolute inset-0 rounded-full border-dashed border-2 border-white animate-spin  hover:animate-none cursor-pointer"></div>

                    {/* <!-- Inner container for the actual icon, positioned above the rotating border */}
                    <div className="relative z-10 flex items-center justify-center">
                        <i id='scalingIcon' className="ri-arrow-down-line scale-[1] sm:scale-[1.2] md:scale-[1.3] lg:scale-[1.4]"></i>
                    </div>
                </div>

                <p id='scrollDownTxt' className='font-semibold font-[Gilroy] text-[7.5px] sm:text-[15px] md:text-sm lg:text-xl xl:text-xl 2xl:text-3xl cursor-pointer'></p>
            </div>

            {/* ps5 photo */}
            <img src="/ps5.png" className='absolute  object-cover left-1/2 -translate-x-1/2 bottom-2.5 w-[31%] sm:w-[27%] md:w-[30%] lg:w-[20%] xl:w-[17%] 2xl:w-[18%]' alt="ps5" />

        </div>
    )
}

export default Footer

