import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
}

const Typewriter = ({ text, delay }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className='relative'>
      <span className='font-sans'>{currentText}</span>
      <span className={`absolute ml-[0.2em] opacity-75 ${showCursor ? 'visible' : 'hidden'}`}>|</span>
    </span>
  );
};

export default Typewriter;
