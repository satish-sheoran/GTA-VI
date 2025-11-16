import React from 'react'
const Navbar = () => {
    return (
        <div id='nav' className='absolute top-0 z-2 w-full px-[2vw] pt-1 text-white flex items-start gap-2.5 lg:pt-3 md:pt-2'>

            <div id='navline' className='cursor-pointer flex flex-col gap-0.5 mt-2.5 md:gap-1.5 lg:gap-1 xl:gap-[3.5px] landscape:mt-2 landscape:sm:mt-2.5'>

                <h2 id='first' className='py-[1.8px] rounded bg-white sm:py-[3.1px] md:py-[3.5px] lg:py-[2.9px] xl:py-[2.7px] 2xl:py-[5.8px]'></h2>

                <h2 id='sec' className='py-[1.8px] rounded bg-white sm:py-[3.1px] md:py-[3.5px] lg:py-[2.9px] xl:py-[2.7px] 2xl:py-[5.8px]'></h2>

                <h2 id='third' className='py-[1.8px] rounded bg-white sm:py-[3.1px] md:py-[3.5px] lg:py-[2.9px] xl:py-[2.7px] 2xl:py-[5.8px]'></h2>

            </div>
            <h2 id='rockstar' className='cursor-pointer flex items-start font-[Helvetica] text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl 2xl:text-5xl '>ROCKSTAR</h2>
        </div>
    )
}
export default Navbar