import React from "react";
import { motion } from 'framer-motion';
//import { SlideFade } from "@chakra-ui/react";
//import { MotionBox } from "./motion";

const staggerVariants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 }
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


export const AnimatedAvtar = ({children}) =>{
  return (
    <motion.image
    initial={{
      opacity: 0,
      translateX: -150
    }}
    animate={{
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1
      }
    }}>
     {children}
    </motion.image>
  )
}
export const AnimatedHome = ({children}) =>{
  return (
    <motion.span
    initial={{
      opacity: 0,
      translateX: 150
    }}
    animate={{
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1
      }
    }}>
     {children}
    </motion.span>
  )
}

export const AnimatedBox = ({children,delay}) =>{
  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1, 
        transition: { duration:delay}
      }}>
        {children}
        </motion.span>
  )
}
