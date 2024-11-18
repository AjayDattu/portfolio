'use client'
import { RevealLinks } from '@/components/ui/RevealBento'
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { Contact } from './Contact';

function Page() {
  return (
    <div className="bg-black h-full p-6 flex flex-col lg:flex-row items-center lg:items-stretch lg:space-x-6">
      <div className="flex-1 w-full h-64 lg:h-auto">
        <iframe
          className="w-full h-[80%] opacity-75 rounded-md"
          src="https://lottie.host/embed/5f1192e4-ed3e-4534-ae53-cc99104ef8d8/zGSydIrAGW.json"
        ></iframe>
      </div>
      <div className="flex-1 w-full h-screen mt-6 lg:mt-0 lg:w-auto">
        <Contact />
      </div>
    </div>
  );
}

export default Page;