import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import React from 'react';
import Image from 'next/image';
import { BackgroundLines } from '@/components/ui/background-lines';

const TitleComponent = () => (
  <h1 className="text-4xl font-semibold text-white dark:text-white">
    Unleash the power of <br />
    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
      Scroll Animations
    </span>
  </h1>
);

const RenderContainerScroll = () => (
  <ContainerScroll titleComponent={<TitleComponent />}>
    <Image
      src="/linear.webp"
      alt="hero"
      height={720}
      width={1400}
      className="mx-auto rounded-2xl object-cover h-full object-left-top"
      draggable={false}
    />
  </ContainerScroll>
);

function Page() {
  return (
    <div className='bg-black flex flex-col h-full gap-8'>
     
       <div> 
       <RenderContainerScroll />
      </div> 
       <div> 
       <RenderContainerScroll />
      </div>
       
       <div> 
       <RenderContainerScroll />
      </div>

      
    </div>
  );
}

export default Page;
