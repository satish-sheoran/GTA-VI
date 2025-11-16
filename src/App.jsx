import React, { useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MainTopBGImgCode from './components/MainTopBGImgCode';
import DownloadButtonWithImgSEction from './components/DownloadButtonWithImgSEction';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  // it is used for ki kb bg images area show hoga
  const [showImgs, setShowImgs] = useState(false)

  //same syntax as useEffect, this is animation of loading jb user enter krega ya website reload krega
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to('.vi-mask-group', {
      delay: 0.3,
      duration: 2,
      rotate: 20,
      ease: 'power4.easeInOut',
      transformOrigin: '50% 50%'
    }).to('.vi-mask-group', {
      scale: 10,
      delay: -1.5,
      duration: 2,
      transformOrigin: '50% 50%',
      ease: 'expo.easeInOut',
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= .9) {
          document.querySelector('#svg').remove();
          setShowImgs(true);
          this.kill();
        }
      }
    })
  }, [])

  // starting me jb animation aayega tb bgImg and skyImg dono rotate and scaled honge and then normal honge , wala animation
  useGSAP(() => {
    if (!showImgs) return;
    let elem1 = document.querySelector('#bgImg');
    let elem2 = document.querySelector('#skyImg');
    let elem3 = document.querySelector('#character');
    let mainText = document.querySelector('#mainText');
    let mainBox = document.querySelector('#mainBox');

    gsap.fromTo(mainBox,
      { rotate: '-5deg', scale: 1.8 }, { rotate: 0, scale: 1, duration: 2, delay: -0.8, ease: 'expo.easeInOut' }
    )

    gsap.fromTo(elem1,
      { rotate: '-12deg', scale: 2.2 }, { rotate: 0, scale: 1.2, duration: 2, delay: -1, ease: 'expo.easeInOut' }
    )
    gsap.fromTo(elem2,
      { rotate: '-8deg', scale: 4.75 }, { rotate: 0, scale: 1.2, duration: 2, delay: -1.2, ease: 'expo.easeInOut' }
    )
    gsap.to(elem3, { scale: 1.4, bottom: '-13%', translateX: '-50%', duration: 1.9, delay: -0.9, ease: 'power4.out' }
    )
    gsap.fromTo(mainText, { rotate: '25deg', scale: 1.2 }, { scale: 1, rotate: 0, duration: 1.5, ease: 'power4.easeInOut' }
    )

  }, [showImgs])


  // mousemove krne pe hone wale animation
  useEffect(() => {
    if (!showImgs) return;

    const bgImg = document.querySelector("#bgImg");
    const skyImg = document.querySelector("#skyImg");
    const mainBox = document.querySelector("#mainBox");
    // const mainText = document.querySelector("#mainText");

    const handleMove = (e) => {
      const xAxisMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(skyImg, { x: xAxisMove });
      gsap.to(bgImg, { x: xAxisMove * 1.3 });
      // gsap.to(mainText, { x: xAxisMove });
    };

    // This attaches that handler to the mousemove event.
    mainBox?.addEventListener("mousemove", handleMove);

    // This is React cleanup.
    // When your component unmounts or showImgs changes, React calls this return function.
    return () => mainBox?.removeEventListener("mousemove", handleMove);
  }, [showImgs]);


  return (
    <div className='relative overflow-x-hidden text-white w-full bg-black min-h-screen'>

      {/* animation svg area */}
      <div id='svg' className=' w-full h-screen flex items-start lg:items-center fixed top-0 left-0 z-100'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* masking perform */}
            <mask id="viMask">
              {/* rectangle drawn using rect tag */}
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          {/* this image will be used for masking, taaki jb VI text zoom ho to uske under ye img dikhe */}
          <image className='object-cover'
            href="/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>

      </div>

      {showImgs && (
        <>
          <Navbar />
          {/* bg images area */}
          <MainTopBGImgCode />
          {/* upr ye jo div h , ye spce occupy krke rkhega , jisse animation ke time- DownloadButtonWithImgSecttion beech me nhi aayega and top pe nhi dikhega */}
          <DownloadButtonWithImgSEction />
        </>
      )}
    </div>
  )
}

export default App
