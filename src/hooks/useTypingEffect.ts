import { useState, useEffect } from "react";

interface UseTypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

interface UseTypingEffectReturn {
  displayedText: string;
  currentTextIndex: number;
  isDeleting: boolean;
}

export const useTypingEffect = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseTime = 1500,
}: UseTypingEffectProps): UseTypingEffectReturn => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const handleTyping = () => {
      const currentText = texts[currentTextIndex];

      if (!isDeleting) {
        if (displayedText !== currentText) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return {
    displayedText,
    currentTextIndex,
    isDeleting,
  };
};
