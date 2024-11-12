import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import React from 'react';

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
    <video
      src="https://youtu.be/wXXnNb2qJ_Q?si=HrZcGnNYmftLYOCl" // Sample video URL
      autoPlay
      loop
      muted
      preload="auto"
      className="mx-auto rounded-2xl object-cover h-full object-left-top"
      draggable={false}
      controls={false}
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
