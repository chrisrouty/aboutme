//Modules import
import React, { Component } from "react";
import Router from 'next/router';

//data
import DataExperiences from '../../../data/experiences.json';

//Styled
import Styled from './styled';
import { motion } from 'framer-motion';

//Components
import ActiveLink from '../ActiveLink/activeLink';

//Frame Motion
let easing = [0.175, 0.85, 0.42, 0.96];

const linkVariant = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  },
  exit: {
    y: 200,
    opacity: 0,
    transition: { staggerChildren: 0.2, duration: 0.2 }
  },
  initial: {
    y: 200,
    opacity: 0,
    transition: { staggerChildren: 0.5, duration: 0.2 }
  }
};


//Render
class Navigate extends Component{

  //Route shallow
  showExperience (e) {
    e.preventDefault()
    Router.push('/experiences', '/experiences', { shallow: true })
  }

  render(){
    return(
      <Styled>

        <ul>
          <li>
            <ActiveLink href="/experiences" className="activeClassName">
              <motion.a variants={linkVariant} params={{slug: 'Mes expérience en entreprise'}}>
                Mes expériences
              </motion.a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/experiences" className="activeClassName">
              <motion.a variants={linkVariant}>
                Mes compétences
              </motion.a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/experiences" className="activeClassName">
              <motion.a variants={linkVariant}>
                Ce que j'aime
              </motion.a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/experiences" className="activeClassName">
              <motion.a variants={linkVariant}>
                Me contacter
              </motion.a>
            </ActiveLink>
          </li>
        </ul>

      </Styled>
    );
  }
}
export default(Navigate);