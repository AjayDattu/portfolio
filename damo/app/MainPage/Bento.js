'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from '@/components/ui/particles';

const AchievementsTable = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const achievements = [
    {
      year: '2023',
      title: 'SIH Finalist',
      description:
        'Developed an Intrusion Detection System using PyQt5 and PyShark for the Smart India Hackathon.',
      technologies: ['PyQt5', 'PyShark'],
    },
    {
      year: '2023',
      title: 'ECET Rank 79',
      description:
        'Achieved 79th rank in AP ECET, a state-level engineering entrance examination.',
      technologies: [],
    },
    {
      year: '2024',
      title: 'Best Impactful Solution',
      description:
        'Developed a decentralized voting system using MERN stack, Web3, Blockchain, Solidity, and Ethereum for Prajwala Hackathon.',
      technologies: ['MERN', 'Web3', 'Blockchain', 'Solidity', 'Ethereum'],
    },
    {
      year: '2024',
      title: 'Solved 550+ Problems',
      description:
        'LeetCode Problem Solving, solving over 550+ problems to sharpen algorithm and data structure skills.',
      technologies: [],
    },
  ];

  const experience = [
    {
      year: '2023',
      title: 'Full Stack Developer Intern',
      description:
        'Worked as a full-stack developer intern at XYZ Company, developing web applications using React and Node.js.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      year: '2023',
      title: 'Java Developer Intern',
      description:
        'Worked as a Java developer intern at ABC Technologies, building Java-based backend services and APIs.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
    },
    {
      year: '2024',
      title: 'Blockchain Developer Intern',
      description:
        'Interned as a Blockchain developer, building smart contracts and decentralized applications using Solidity and Ethereum.',
      technologies: ['Solidity', 'Ethereum', 'Smart Contracts', 'Truffle'],
    },
  ];

  const education = [
    {
      year: '2022-2025',
      title: 'BTech in Computer Science',
      institution: 'SRKR Engineering College',
      location: 'Bhimavaram, Andhra Pradesh',
    },
    {
      year: '2019-2022',
      title: 'Diploma in Engineering',
      institution: 'AANM VVSRS Polytechnic',
      location: 'Gudlavalleru, Andhra Pradesh',
    },
    {
      year: '2018-2019',
      title: 'High School',
      institution: 'SJRVV High School',
      location: 'Unguturu, Andhra Pradesh',
    },
  ];

  return (
    <div className="h-full flex flex-col p-4 md:p-6 lg:p-10 space-y-16">
      {/* Education Section */}
      <div className="h-auto">
        <h1 className="text-3xl md:text-4xl font-light mt-12 mb-6 text-center text-white">
          Education
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={'#ffffff'}
            refresh
          />
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg bg-opacity-30 "
            >
              <div
                className="text-sm md:text-lg font-semibold text-blue-400 w-full sm:text-center"
                data-aos="fade-right"
              >
                {edu.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {edu.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {edu.institution}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="relative h-auto">
        <h1 className="text-3xl md:text-4xl font-light mt-12 mb-6 text-center text-white">
          Experience
        </h1>
        <div className="space-y-6 md:space-y-8">
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={'#ffffff'}
            refresh
          />
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg bg-opacity-30  backdrop-blur-lg"
            >
              <div
                className="text-sm md:text-lg font-semibold text-blue-400 w-full sm:text-center"
                data-aos="fade-right"
              >
                {exp.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {exp.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {exp.description}
                </div>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-700 text-blue-100 text-xs md:text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="h-auto">
        <h1 className="text-3xl md:text-4xl font-light mt-12 mb-6 text-center text-white">
          Achievements
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={'#ffffff'}
            refresh
          />
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg bg-opacity-30"
            >
              <div
                className="text-sm md:text-lg font-semibold text-blue-400 w-full sm:text-center"
                data-aos="fade-right"
              >
                {achievement.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {achievement.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {achievement.description}
                </div>
                {achievement.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {achievement.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-700 text-blue-100 text-xs md:text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTable;
