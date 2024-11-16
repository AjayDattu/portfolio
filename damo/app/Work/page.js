import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import SkillsProgressBar from '@/components/ui/DsaSkill';
import GitHubStats from '@/components/ui/Gitui';
import StatsSection from '@/components/ui/Gitui';
import Particles from '@/components/ui/particles';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import React from 'react';

const RenderContainerScroll = ({ video, titleComponent }) => (
  <ContainerScroll titleComponent={titleComponent}>
    <video
      src={video} // Valid video URL
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
    <div className="bg-black flex flex-col h-full gap-8">
        <iframe className="absolute w-[50%] h-[50%] left-0 top-0 inset-0" src="https://lottie.host/embed/2b86e896-558c-4255-9f53-16f715871ff8/lqLhvKteyP.json"></iframe>
        <div className='h-screen w-full'>
           
          <TextHoverEffect text="WORKS" className="z-10" />
        </div>
      <div>
        <RenderContainerScroll
          video="https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751142/Untitled_design_3_emrfn6.mp4"
          titleComponent={
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Explore <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                 3D Spline, Tailwind, React
              </span>
            </h1>
          }
        />
      </div>
      <div>
        <RenderContainerScroll
          video="https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751165/Untitled_design_4_g60jom.mp4"
          titleComponent={
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Introducing <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                ShopIn An Ecommerce Site
              </span>
            </h1>
          }
        />
      </div>
      <div>
    
        <RenderContainerScroll
          video="https://res.cloudinary.com/dyny7wc0n/video/upload/v1731750106/xbrmgcrdbzucxcatqd3l.mp4"
          titleComponent={
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Innovative <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Team-Pad - A File share Application without logins
              </span>
            </h1>
          }
        />
      </div>
      <div>
  
        <RenderContainerScroll
          video="https://res.cloudinary.com/dyny7wc0n/video/upload/v1731752164/Untitled_design_6_ihgzn9.mp4"
          titleComponent={
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Unleash <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Visual Designs-Piclingo Transulation
              </span>
            </h1>
          }
        />
      </div>
      <div>
        <RenderContainerScroll
          video="https://res.cloudinary.com/dyny7wc0n/video/upload/v1731753485/Untitled_design_8_rlsds3.mp4"
          titleComponent={
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Showcase <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Interactive Designs
              </span>
            </h1>
          }
        />
      </div>
      <div>
        <RenderContainerScroll
          video="https://res.cloudinary.com/dyny7wc0n/video/upload/v1731753490/Untitled_design_9_npsrzp.mp4"
          titleComponent={
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Empower <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Functionality - Notes App
              </span>
            </h1>
          }
        />
      </div>
      <div>
        <RenderContainerScroll
          video="https://res.cloudinary.com/dyny7wc0n/video/upload/v1731750787/Untitled_design_2_dyhlx9.mp4"
          titleComponent={
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Dive into <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Cutting-Edge Tech Dashboard with Nextjs
              </span>
            </h1>
          }
        />
      </div>
      <div>
        <RenderContainerScroll
          video="https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751734/Untitled_design_5_ghfevt.mp4"
          titleComponent={
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Discover <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                New type of Designs
              </span>
            </h1>
          }
        />
      </div>
      <div className='text-6xl text-white w-full text-center italic font-extrabold h-20'>
        DSA
      </div>
      <div>
        <p align="center"> <img align="center" src="https://leetcard.jacoblin.cool/dattuajay005?theme=dark&font=Encode%20Sans%20Semi%20Expanded&ext=heatmap" alt="LeetCode Stats"/></p>
      </div>
      
      <SkillsProgressBar/>
      <GitHubStats/>

    </div>
  );
}

export default Page;
