import React, { createContext, useContext, useState } from 'react';
import { correctSound, wrongSound } from './soundUtils';

export const SoundContext = createContext(null);

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};

export const SoundProvider = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn(prevState => !prevState);
  };

  const playSound = (isCorrect) => {
    if (isSoundOn) {
      if (isCorrect) {
        correctSound.play();
      } else {
        wrongSound.play();
      }
    }
  };

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};