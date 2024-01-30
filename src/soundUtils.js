let isSoundOn = true;

export const correctSound = new Audio('/sounds/correct-sound.mp3');
export const wrongSound = new Audio('/sounds/wrong-sound.mp3');

export const playSound = (isCorrect) => {
  if (isSoundOn) {
    if (isCorrect) {
      correctSound.play();
    } else {
      wrongSound.play();
    }
  }
};

export const toggleSound = () => {
  isSoundOn = !isSoundOn;
};