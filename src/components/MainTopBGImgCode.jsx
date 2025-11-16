import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MainText from './MainText'

function MainTopBGImgCode() {

    return (
        // <div id='mainBox' className='overflow-hidden relative w-full min-h-[50vh] sm:min-h-[75vh] md:min-h-[65vh] lg:h-screen '>
        <div id='mainBox' className='overflow-hidden relative w-full min-h-[60vh] portrait:lg:h-screen landscape:h-screen '>


            <img id='skyImg' className='bg-center absolute z-0 left-0 object-cover top-0 w-full h-full scale-[1.1]  lg:h-screen lg:w-full lg:rotate-0'
                src="/sky.png" alt="" />

            <img id='bgImg' className='absolute z-1 object-cover bg-center top-0 left-0 w-full h-full scale-[1.1]  lg:h-screen lg:w-full lg:rotate-0'
                src="/bg.png" alt="" />

            <img id='character' className='absolute max-h-[72%] max-w-2/3 scale-[3] z-3 -bottom-[170%] left-1/2 -translate-x-1/2' src="/girlbg.png" alt="" />

            <MainText />
            <Footer />
        </div>
    )
}

export default MainTopBGImgCode

