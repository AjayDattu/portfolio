import React from 'react'
import Spline from '@splinetool/react-spline/next';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import AboutMe from '@/components/ui/AboutQues';

function page() {
    const words = 'hello,This is Ajay,I am from India Here youll find me here scroll to know more'
  return (
    <div className='bg-black flex flex-col'>
      <div className='justify-start w-full h-screen p-20 pt-60 flex flex-row'>
        
        <div className='relative z-10'><TextGenerateEffect words={words} /></div>
          <div className='absolute top-2'><Spline
        scene="https://prod.spline.design/TC4D6CGclO4uS0Zd/scene.splinecode" 
        width={200}
        height={200}/>
      </div>
      </div>
      <div className='h-screen bg-white'></div>
    </div>
  )
}

export default page