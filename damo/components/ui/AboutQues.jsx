'use client'
import React from 'react';
import { Collapse } from 'antd';
import 'antd/dist/reset.css';

const { Panel } = Collapse;

const AboutMe = () => {
  return (
    <div className="about-me-section bg-neutral-100 text-black p-8">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg mb-8">
        Hello, I am Ajay. I am from India. Here, you'll find more about me.
        Scroll down to know more.
      </p>

      <Collapse
        defaultActiveKey={['1']}
        className="bg-neutral-100 text-black"
        expandIconPosition="right"
        style={{ backgroundColor: '#f5f5f5' }} // Neutral background color
      >
        <Panel
          header="What are your main passions?"
          key="1"
          style={{
            backgroundColor: '#fff', // White background for each panel
            border: '1px solid #fff', // White border
          }}
        >
          <p>I'm passionate about technology, coding, and designing user-friendly web applications.</p>
        </Panel>
        <Panel
          header="What motivates you in life?"
          key="2"
          style={{
            backgroundColor: '#fff',
            border: '1px solid #fff',
          }}
        >
          <p>I'm driven by my desire to continuously learn and improve, whether through programming or exploring new technologies.</p>
        </Panel>
        <Panel
          header="How would you describe your career journey so far?"
          key="3"
          style={{
            backgroundColor: '#fff',
            border: '1px solid #fff',
          }}
        >
          <p>My career journey began with a deep interest in coding, leading me to explore various technologies and frameworks. Through internships and personal projects, I’ve honed my skills in full-stack development.</p>
        </Panel>
        <Panel
          header="What are some projects you're most proud of?"
          key="4"
          style={{
            backgroundColor: '#fff',
            border: '1px solid #fff',
          }}
        >
          <p>I’m particularly proud of my work on the Smart Expense Tracker with AI and the e-commerce site where I implemented advanced search functionality and filters.</p>
        </Panel>
        <Panel
          header="What are your future goals?"
          key="5"
          style={{
            backgroundColor: '#fff',
            border: '1px solid #fff',
          }}
        >
          <p>I aim to continue developing as a full-stack developer, exploring new technologies like deep learning and machine learning, and building impactful solutions.</p>
        </Panel>
        <Panel
          header="What do you enjoy doing outside of work?"
          key="6"
          style={{
            backgroundColor: '#fff',
            border: '1px solid #fff',
          }}
        >
          <p>Outside of work, I enjoy going to the gym, playing chess, and experimenting with 3D designs.</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default AboutMe;
