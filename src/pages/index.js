//Base import
import React, { Component } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

//data
import DataExperiences from '../../data/experiences.json';

//Styled
import Styled from '../components/StyledPages/index/styled';

//Components
import HeroTitle from '../components/HeroTitle/styled';
import BackgroundEffect from '../components/BackgroundEffect/backgroundEffect';
import Navigate from '../components/Navigate/navigate';

//Import Assets Public
import UrlImgHome from '../public/img/bg_home.jpg';

//FrameMotion
let easing = [0.175, 0.85, 0.42, 0.96];

const h1Variant = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: { duration: 0.5 }
  },
  initial: {
    y: -200,
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const pVariant = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
  initial: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.5, }
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.5, }
  }
};

const layoutVariants = {
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
    }
  },
  exit: {
    opacity: 0,
    scale: 0.50,
    transition: {
      duration: 1,
    }
  },
  initial: {
    opacity: 0,
    scale: 0.80,
    transition: {
      duration: 1.5,
    }
  },
}; 

class Home extends Component{

  render(){

    return(

      <Styled>
        <motion.div initial="initial" animate="enter" exit="exit">
          <motion.div variants={ layoutVariants }>
            <BackgroundEffect pathImage={ UrlImgHome }>
              <HeroTitle>
                <motion.h1 variants={ h1Variant }>
                  Christophe Routy
                </motion.h1>
                <motion.p variants={ pVariant }>
                  Développeur Web Front-end / Intégrateur Web<br />avec des qualités d’UX/UI designer
                </motion.p>
              </HeroTitle>
              <Navigate />
            </BackgroundEffect>
          </motion.div>
        </motion.div>
      </Styled>

    )
  }
}

export default(Home);
