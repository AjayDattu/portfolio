import MainText from "@/components/MainText";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import "./button.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black px-4 sm:px-6 lg:px-8">
      <BackgroundBeamsWithCollision className="h-screen">
        <div className="w-full flex flex-col p-4 sm:p-6 md:w-3/4 lg:w-2/3 xl:w-1/2 gap-8">
          <div className="w-full mb-4 justify-start items-start bg-white rounded-full backdrop-blur-md">
            {/* Lottie iframe embedded animation with responsive width */}
            <iframe
              src="https://lottie.host/embed/3094c793-7b33-45d2-a3f5-2dd35c73bf63/M9xs6DUtv8.json"
              className="w-full h-[200px] sm:h-[200px] md:h-[200px] lg:h-[200px] rounded-lg"
              frameBorder="0"
              allow="fullscreen"
            ></iframe>
          </div>
          <TextGenerateEffect
            words="Come on in and take a look at what I’ve been working on."
            className="text-left text-1xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            filter={true}
            duration={1}
          />
          <div className="flex justify-end mt-4">
            <Link href="/MainPage" passHref>
              <button className="button-86" role="button">Enter</button>
            </Link>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
