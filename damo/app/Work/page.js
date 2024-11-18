import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import SkillsProgressBar from '@/components/ui/DsaSkill';
import GitHubStats from '@/components/ui/Gitui';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import React from 'react';

// Component for rendering video containers dynamically
const RenderContainerScroll = ({ video, titleComponent }) => (
  <ContainerScroll titleComponent={titleComponent}>
    <video
      src={video}
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
  // Data array for videos and their content
  const videoData = [
    {
      video: 'https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751142/Untitled_design_3_emrfn6.mp4',
      title: '3D Portfolio',
      description: 'I learned how to maintain 3D models in the website.',
      techStack: ['React', 'Spline', 'Tailwind CSS'],
    },
    {
      video: 'https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751165/Untitled_design_4_g60jom.mp4',
      title: 'ShopIn Ecommerce',
      description: 'Developed an e-commerce platform with a seamless UI.',
      techStack: ['MERN','Redux','Ant Design','TailwindCSS'],
    },
    {
      video: 'https://res.cloudinary.com/dyny7wc0n/video/upload/v1731750106/xbrmgcrdbzucxcatqd3l.mp4',
      title: 'Team-Pad',
      description: 'File sharing app without login requirements.',
      techStack: ['React', 'Express.js', 'Tailwind CSS'],
    },
    {
      video: 'https://res.cloudinary.com/dyny7wc0n/video/upload/v1731752164/Untitled_design_6_ihgzn9.mp4',
      title: 'Piclingo Translation',
      description: 'Translated text from images for easy communication.',
      techStack: ['React', 'Tesseract.js', 'Tailwind CSS'],
    },
    {
      video: 'https://res.cloudinary.com/dyny7wc0n/video/upload/v1731753485/Untitled_design_8_rlsds3.mp4',
      title: 'Interactive Designs',
      description: 'Explored interactive web design concepts.',
      techStack: ['React', 'Tailwind CSS', 'Spline'],
    },
    {
      video: 'https://res.cloudinary.com/dyny7wc0n/video/upload/v1731753490/Untitled_design_9_npsrzp.mp4',
      title: 'Notes App',
      description: 'Created a real-time note syncing application.',
      techStack: ['React', 'Node.js', 'MongoDB'],
    },
    {
      video: 'https://res.cloudinary.com/dyny7wc0n/video/upload/v1731750787/Untitled_design_2_dyhlx9.mp4',
      title: 'Next.js Dashboard',
      description: 'Implemented a cutting-edge tech dashboard.',
      techStack: ['Next.js', 'Tailwind CSS'],
    },
    {
      video: 'https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751734/Untitled_design_5_ghfevt.mp4',
      title: 'New Design Concepts',
      description: 'Discovered unique web design techniques.',
      techStack: ['React', 'CSS', 'Figma'],
    },
  ];

  return (
    <div className="bg-black flex flex-col h-full gap-8">
      <BackgroundBeamsWithCollision className={"h-screen"}> 
      <div className="h-screen w-full bg-black">
        <TextHoverEffect text="WORKS" className="z-10" />
      </div>
      </BackgroundBeamsWithCollision>  
      {videoData.map((item, index) => (
        <div key={index}>
          <RenderContainerScroll
            video={item.video}
            titleComponent={
              <h1 className="text-4xl font-light text-white dark:text-white">
                {item.title} <br />
                <span className="text-xl mt-2">{item.description}</span>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-white px-2 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                    
                  ))}
                </div>
              </h1>
            }
          />
        </div>
      ))}
      <div className="text-6xl text-white w-full text-center italic font-extrabold h-20">
        DSA
      </div>
      <div>
        <p align="center">
          <img
            align="center"
            src="https://leetcard.jacoblin.cool/dattuajay005?theme=dark&font=Encode%20Sans%20Semi%20Expanded&ext=heatmap"
            alt="LeetCode Stats"
          />
        </p>
      </div>
      <SkillsProgressBar />
      <GitHubStats />
    </div>
  );
}

export default Page;
