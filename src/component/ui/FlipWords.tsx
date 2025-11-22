import React from 'react';
import { motion } from 'framer-motion';

export default function FlipWords({ 
  words = ["Global Dreams", "Igniting Potential", "Learning Together", "Growing Minds"], 
  className = "" 
}) {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <motion.span 
      key={currentWordIndex}
      initial={{ opacity: 0, rotateX: 90 }}
      animate={{ opacity: 1, rotateX: 0 }}
      exit={{ opacity: 0, rotateX: -90 }}
      transition={{ duration: 0.5 }}
      className={`inline-block ${className}`}
    >
      {words[currentWordIndex]}
    </motion.span>
  );
}