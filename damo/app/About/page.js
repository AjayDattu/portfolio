import React from 'react'
import Spline from '@splinetool/react-spline/next';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import AboutMe from '@/components/ui/AboutQues';

function page() {
    const words = 'hello,This is Ajay,I am from India Here youll find me here scroll to know more'
  return (
    <div className='bg-black flex flex-col h-full'>
       <div className='fixed z-0 bg-black'> 
        <Spline
            className="scale-125"
            scene="https://prod.spline.design/VTK0eQFZKQ1tEATE/scene.splinecode" 
        />
      </div>
      <div className='justify-start md:w-[100px] lg:w-[1000px] h-screen p-20 pt-60'>
         <TextGenerateEffect words={words} />
      </div>
      <div className='h-screen flex'>
        <AboutMe/>
      </div>
    </div>
  )
}

export default page