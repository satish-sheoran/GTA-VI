import React from 'react'

const MainText = () => {
    return (
        <div id='mainText' className='text-white font-[Helvetica] absolute z-2 flex flex-col left-1/2 gap-1.5 top-[5vh] -translate-x-1/2 text-6xl sm:text-7xl md:text-7xl lg:text-9xl lg:top-[8%] xl:text-8xl xl:top-[5%] 2xl:text-[140px] ' >

            <h1 id='grand' className='leading-none -ml-[6vw]'>Grand</h1>
            <h1 id='theft' className='leading-none ml-[3vw] '> Theft </h1>
            <h1 id='auto' className='leading-none  -ml-[6vw]'> Auto</h1>
        </div>
    )
}

export default MainText
