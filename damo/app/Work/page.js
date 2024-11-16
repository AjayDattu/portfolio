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

const RenderContainerScroll = (video) => (
  <ContainerScroll titleComponent={<TitleComponent />}>
    <video
      src={video} // Sample video URL
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
         <RenderContainerScroll video={"https://www.canva.com/design/DAGWoTB7yGY/dsO7boo0zQ0zlc-56__pog/watch?utm_content=DAGWoTB7yGY&utm_campaign=designshare&utm_medium=link&utm_source=editor"}/>
       </div> 
       <div> 
         <RenderContainerScroll video={"https://www.canva.com/design/DAGWoTB7yGY/dsO7boo0zQ0zlc-56__pog/watch?utm_content=DAGWoTB7yGY&utm_campaign=designshare&utm_medium=link&utm_source=editor"}/>
       </div>
       <div> 
         <RenderContainerScroll video={"https://www.canva.com/design/DAGWoTB7yGY/dsO7boo0zQ0zlc-56__pog/watch?utm_content=DAGWoTB7yGY&utm_campaign=designshare&utm_medium=link&utm_source=editor"}/>
       </div>
    </div>
  );
}

export default Page;
