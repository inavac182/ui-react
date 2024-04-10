'use client';
import { AnimatePresence, AnimationProps, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from "styled-components";

const HeroHeading = styled.h1`
  width: 70%;
  text-align: center;
  font-size: 48px;
  margin: 0 auto;
`;

const HeroLetter = styled(motion.span)`
  display: inline-block;
  color: var(--tertiary-token_100);
`;

const HeroLettersContainer = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin: 50px auto;
`;

export const HeroMessage = () => {
  return (
    <>
      <HeroHeading>
        Web can also be
      </HeroHeading>
      <HeroLoop />
    </>
  )
}

const variants: Variants = { 
  initial: {
    y: 0,
    opacity: 0
  },
  bumpy: {
    y: [0, -30, -50],
    opacity: [0, 1, 0],
    scale: [1, 1.25, 1],
    transition: {
      duration: 3,
      ease: 'easeIn',
      stiffness: 1000,
      damping: 200
    }
  }
};

const texts = [
  '🤩 dynamic',
  '😝 fun',
  '😮 impressive',
  '🧐 interesting',
  '😎 cool',
  '✨ @uiReact'
]

const HeroLoop = () => {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (visible + 1 === texts.length) {
        setVisible(0);
      } else { 
        setVisible(visible + 1);
      }
    }, 3100);

    return () => clearTimeout(timeout);
  }, [visible]);

  return (
    <HeroLettersContainer>
      <AnimatePresence mode='popLayout'>
        {texts.map((text, index) => (
          <>
            {visible === index && (
              <HeroLetter key={`letter-${index}`} initial='initial' animate='bumpy' variants={variants}>
                {text}
              </HeroLetter>
            )}
          </>
        ))}
      </AnimatePresence>
    </HeroLettersContainer>
  )
}