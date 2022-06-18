import { useState, useEffect, useRef } from 'react';

export default function useTypingText(text: string, speed = 150, delay = 2000) {
  const firstRender = useRef(true);
  const [index, setIndex] = useState(0);
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    let tDelay: NodeJS.Timer;
    let tInterval: NodeJS.Timer;

    function typist() {
      tInterval = setTimeout(() => {
        if (index < text.length) {
          setTypingText((typingText) => typingText + text[index]);
          setIndex((i) => i + 1);
        }
      }, speed);
    }

    if (firstRender.current) {
      tDelay = setTimeout(typist, delay);
      firstRender.current = false;
    } else {
      typist();
    }

    return () => {
      clearTimeout(tDelay);
      clearInterval(tInterval);
    };
  }, [firstRender, index, text, speed, delay]);

  return { typingText };
}
