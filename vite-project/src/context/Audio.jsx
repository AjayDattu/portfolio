import React, { createContext, useRef, useContext } from "react";

// Create a context
const AudioContext = createContext();

// Create a provider component
export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <AudioContext.Provider value={{ playMusic }}>
      <audio ref={audioRef}>
        <source src="../assets/button-124476.mp3" type="audio/mpeg" />
      </audio>
      {children}
    </AudioContext.Provider>
  );
};

// Custom hook to use the Audio context
export const useAudio = () => useContext(AudioContext);
