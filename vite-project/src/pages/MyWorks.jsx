// App.jsx
import personImg from '../assets/person.png';
import phoneImg from '../assets/phone.png';
import phoneAppImg from '../assets/phone.png';
import laptopImg from '../assets/laptop.png';
import laptopAppImg from '../assets/laptop.png';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import githubImg from '../assets/github.png';
// src/App.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/project.css' // Importing the CSS file


const MyWorks = () => {
  // Refs for scroll animations
  const boxContainerRef = useRef(null);
  const saluteTextContainerRef = useRef(null);
  const saluteImgContainerRef = useRef(null);
  const nameRef = useRef(null);
  const jobTitleContainersRef = useRef([]);
  const jobTitlesRef = useRef([]);
  const projectsTitleRef = useRef(null);
  const phonesRef = useRef([]);
  const laptopRef = useRef(null);

  useEffect(() => {
    // Initialize GitHub boxes
    const boxContainer = boxContainerRef.current;
    const list = [
      0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
      205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
      211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
      133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
      259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
      260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
      144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
      24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
      270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
      316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
      156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
      79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
      283, 284, 285, 323, 324, 325, 326,
    ];

    for (let i = 0; i < 365; i++) {
      const el = document.createElement('div');
      el.className = list.includes(i) ? 'box active' : 'box';
      boxContainer.appendChild(el);
    }

    // Scroll event listener
    const handleScroll = () => {
      const offsetY = window.scrollY;

      // Transformations for INTRODUCTION
      if (saluteTextContainerRef.current) {
        saluteTextContainerRef.current.style.transform = `translateY(${offsetY * 0.1}px)`;
      }

      if (saluteImgContainerRef.current) {
        saluteImgContainerRef.current.style.transform = `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`;
      }

      if (nameRef.current) {
        nameRef.current.style.transform = `translateX(${offsetY * 0.1}px)`;
      }

      jobTitleContainersRef.current.forEach((ref, index) => {
        if (ref) {
          ref.style.backgroundPositionY = `${index === 0 ? offsetY * 0.5 : -offsetY * 0.5}px`;
        }
      });

      if (jobTitlesRef.current[0]) {
        jobTitlesRef.current[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`;
      }

      if (jobTitlesRef.current[1]) {
        jobTitlesRef.current[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
      }

      if (projectsTitleRef.current) {
        projectsTitleRef.current.style.transform = `translateY(calc(400vh - ${offsetY}px))`;
      }

      phonesRef.current.forEach((ref, index) => {
        if (ref) {
          let translateXValue;
          if (index === 0) {
            translateXValue = `calc(500vh - ${offsetY}px)`;
          } else if (index === 1) {
            translateXValue = `calc(750vh - ${offsetY}px)`;
          }
          ref.style.transform = `translateX(${translateXValue})`;
        }
      });

      if (laptopRef.current) {
        laptopRef.current.style.transform = `translateX(calc(600vh - ${offsetY}px))`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container bg-black">
      {/* INTRODUCTION */}
      <div className="intro">
        {/* Salute Section */}
        <div className="salute">
          <div className="saluteTextContainer" ref={saluteTextContainerRef}>
            <h1 className="saluteText">Hi</h1>
          </div>
          <div className="saluteImgContainer" ref={saluteImgContainerRef}>
            <img src={personImg} alt="Person" className="saluteImg" />
          </div>
        </div>

        {/* Name Section */}
        <div className="nameContainer" ref={nameRef}>
          <h2 className="name">I'm John</h2>
        </div>

        {/* Job Titles */}
        <div
          className="jobTitleContainer dark"
          ref={(el) => (jobTitleContainersRef.current[0] = el)}
        >
          <h2 className="jobTitle" ref={(el) => (jobTitlesRef.current[0] = el)}>
            a Web Developer
          </h2>
        </div>
        <div
          className="jobTitleContainer purple"
          ref={(el) => (jobTitleContainersRef.current[1] = el)}
        >
          <h2 className="jobTitle" ref={(el) => (jobTitlesRef.current[1] = el)}>
            and Designer
          </h2>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="projects">
        <h1 className="projectsTitle" ref={projectsTitleRef}>
          Here are some of my projects
        </h1>

        {/* Project 1 */}
        <div className="project">
          <div className="phone" ref={(el) => (phonesRef.current[0] = el)}>
            <img src={phoneImg} alt="Phone" />
            <div className="phoneScreen">
              <img src={phoneAppImg} alt="Phone App" className="phoneApp" />
            </div>
          </div>
          <div className="projectDetail">
            <h1 className="projectTitle">Vortex</h1>
            <div className="projectDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repudiandae quia natus et iste earum ab fugiat eum ipsam, illum
              vitae nihil quasi recusandae? Nesciunt laudantium recusandae illo
              veritatis possimus! Accusamus repudiandae quia natus et iste earum
              ab fugiat eum ipsam, illum vitae nihil quasi recusandae? Nesciunt
              laudantium recusandae illo veritatis possimus! laudantium
              recusandae illo veritatis possimus! recusandae illo veritatis.
            </div>
            <button className="projectButton">Learn More</button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project">
          <div className="laptop" ref={laptopRef}>
            <img src={laptopImg} alt="Laptop" />
            <div className="laptopScreen">
              <img src={laptopAppImg} alt="Laptop App" className="laptopApp" />
            </div>
          </div>
          <div className="projectDetail">
            <h1 className="projectTitle">Vortex</h1>
            <div className="projectDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repudiandae quia natus et iste earum ab fugiat eum ipsam, illum
              vitae nihil quasi recusandae? Nesciunt laudantium recusandae illo
              veritatis possimus! Accusamus repudiandae quia natus et iste earum
              ab fugiat eum ipsam, illum vitae nihil quasi recusandae? Nesciunt
              laudantium recusandae illo veritatis possimus! laudantium
              recusandae illo veritatis possimus! recusandae illo veritatis.
            </div>
            <button className="projectButton">Learn More</button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project">
          <div className="phone" ref={(el) => (phonesRef.current[1] = el)}>
            <img src={phoneImg} alt="Phone" />
            <div className="phoneScreen">
              <img src={phoneAppImg} alt="Phone App" className="phoneApp" />
            </div>
          </div>
          <div className="projectDetail">
            <h1 className="projectTitle">Vortex</h1>
            <div className="projectDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repudiandae quia natus et iste earum ab fugiat eum ipsam, illum
              vitae nihil quasi recusandae? Nesciunt laudantium recusandae illo
              veritatis possimus! Accusamus repudiandae quia natus et iste earum
              ab fugiat eum ipsam, illum vitae nihil quasi recusandae? Nesciunt
              laudantium recusandae illo veritatis possimus! laudantium
              recusandae illo veritatis possimus! recusandae illo veritatis.
            </div>
            <button className="projectButton">Learn More</button>
          </div>
        </div>
      </div>

      {/* GITHUB */}
      <div className="githubContainer">
        <h1 className="githubTitle">Want to see all projects?</h1>
        <div className="githubChart">
          <div className="dates">
            <div>Jan</div>
            <div>Feb</div>
            <div>Mar</div>
            <div>Apr</div>
            <div>May</div>
            <div>Jun</div>
            <div>Jul</div>
            <div>Agu</div>
            <div>Sep</div>
            <div>Oct</div>
            <div>Nov</div>
            <div>Dec</div>
          </div>
          <div className="boxContainer" ref={boxContainerRef}></div>
          <h1 className="githubTitle">ON GITHUB</h1>
        </div>
        <div className="githubSm">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={githubImg} alt="GitHub" />
          </a>
          <h2>Find Me on Github</h2>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;

