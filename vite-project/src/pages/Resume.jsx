import React from 'react';
import dp from '../assets/Profile.jpg';
import {  useNavigate } from 'react-router-dom';
// Import the CSS file for custom styles

const Resume = () => {
    const navigate =useNavigate();
    const handleClick = () => {
    navigate("/");
     };
    return (
        <div className="flex flex-row h-screen overflow-hidden">
            
            <div className="relative w-1/3 h-full">
                <img 
                    src={dp} 
                    className="object-cover w-full h-full opacity-50 filter blur-sm"
                    alt="Profile"
                />
            </div>
           <div className="font-sans m-5 p-5 text-white rounded-lg shadow-lg w-full overflow-y-scroll h-full resume-container">
                {/* Header */}
                <header className="text-center mb-6">
                    <div className="text-lg">BHIMAVARAM, AP</div>
                </header>
                
                {/* Education Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">EDUCATION</h2>
                    <div className="mt-2">
                        <h3 className="text-xl font-bold">S.R.K.R ENGINEERING COLLEGE</h3>
                        <div>B.Tech - COMPUTER SCIENCE  | <div className="font-semibold">CGPA: 8.53</div> | July 2022 - April 2025 | BHIMAVARAM, INDIA</div>
                    </div>
                </section>

                {/* Internship Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">INTERNSHIP</h2>
                    <div className="mt-2">
                        <h3 className="text-xl font-bold">Henotic</h3>
                        <div>Java Developer | July 2023 - September 2023 | Hyderabad, INDIA</div>
                        <ul className="list-disc list-inside ml-5 mt-1">
                            <li className="font-semibold animate__animated animate__fadeIn">Experienced in UI design with JavaFX and Java Swing.</li>
                            <li className="font-semibold animate__animated animate__fadeIn">Employed best practices in Java Swing and Java to deliver efficient, maintainable code.</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold">Black Bucks</h3>
                        <div>Full Stack Developer | June 2024 - Present | Remote, INDIA</div>
                        <ul className="list-disc list-inside ml-5 mt-1">
                            <li className="font-semibold animate__animated animate__fadeIn">Developed responsive and user-centric UIs utilizing React for optimal user experience.</li>
                            <li className="font-semibold animate__animated animate__fadeIn">Engineered robust backends with Django, focusing on high performance and secure data management.</li>
                            <li className="font-semibold animate__animated animate__fadeIn">Implemented RESTful APIs for seamless integration between frontend and backend systems.</li>
                        </ul>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">NOTABLE PROJECTS</h2>
                    <div className="mt-2">
                        <h3 className="text-xl font-bold">
                            <a href="https://tempad.netlify.app/" className="text-blue-400 hover:underline animate__animated animate__fadeIn">TempPad</a> | React.js, Node.js, Firebase, Bootstrap
                        </h3>
                        <div>Developed a file-sharing app with React, Node.js, Firebase, and Bootstrap.</div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold">
                            <a href="https://github.com/AjayDattu/PicLingo.git" className="text-blue-400 hover:underline animate__animated animate__fadeIn">PicLingo</a> | MERN Stack
                        </h3>
                        <div>Built a language translation app capable of translating text, images, and audio.</div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold">
                            <a href="https://github.com/AjayDattu/Notes-Backend-Api" className="text-blue-400 hover:underline animate__animated animate__fadeIn">NotesApp</a> | MERN Stack
                        </h3>
                        <div>Developed a note-taking app that allows users to create, edit, delete, and save notes.</div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold">
                            <a href="https://github.com/AjayDattu/StreamDownloader" className="text-blue-400 hover:underline animate__animated animate__fadeIn">Stream Downloader</a> | React.js, Rapid API
                        </h3>
                        <div>Created a YouTube video downloading app that allows users to download videos directly from YouTube.</div>
                    </div>
                </section>

                {/* Technical Skills Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">TECHNICAL SKILLS</h2>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li><strong>Languages:</strong> <div className="font-semibold">C++, JavaScript, SQL</div></li>
                        <li><strong>Tools:</strong> <div className="font-semibold">Postman, Canva, Git</div></li>
                        <li><strong>Technologies/Frameworks:</strong> <div className="font-semibold">Linux, GitHub, ReactJS, Ganache, Spline, NodeJS, ExpressJS, MongoDB, PyQt, Java Swing</div></li>
                    </ul>
                </section>

                {/* Achievements Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">ACHIEVEMENTS</h2>
                    <ul className="list-disc list-inside ml-5 mt-2">
                        <li className="font-semibold animate__animated animate__fadeIn">Runner-up in Smart India Hackathon (SIH) 2023.</li>
                        <li className="font-semibold animate__animated animate__fadeIn">Solved 400+ LeetCode problems.</li>
                        <li className="font-semibold animate__animated animate__fadeIn">Secured 79th rank in AP ECET.</li>
                    </ul>
                </section>

                {/* Certifications Section */}
                <section>
                    <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2">CERTIFICATIONS</h2>
                    <div className="mt-2">
                        <a href="https://drive.google.com/file/d/1PTNYYFQlhjIY96C9ulmp-2YyMduw5jN8/view?usp=sharing" className="text-blue-400 hover:underline">Programming Essentials in C, Introduction to Cybersecurity, Introduction to IoT, IT Essentials - Cisco</a>
                    </div>
                    <div className="mt-2">
                        <a href="https://drive.google.com/file/d/1PTNYYFQlhjIY96C9ulmp-2YyMduw5jN8/view?usp=sharing" className="text-blue-400 hover:underline">Full-Stack Web Developer - Coursera</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resume;
