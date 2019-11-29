//Base import
import React, { Component, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

//data
// import posts from '../../data/posts.json';

//Styled
import Styled from '../components/StyledPages/index/styled';


//Components
import ActiveLink from '../components/ActiveLink/activeLink';

//Render
class Experiences extends Component{

  render(){

    const pageVariants = {
      enter: {
        width: "100%",
        height: "100vh",
        backgroundColor: "green",
        transition: {
          duration: 1,
        }
      },
      exit: {
        width: "100%",
        height: "0vh",
        backgroundColor: "green",
        transition: {
          duration: 1,
        }
      },
      inital: {
        width: "100%",
        height: "0vh",
        backgroundColor: "green",
        transition: {
          duration: 1.5,
        }
      }
    };

    return(
      <Styled>
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={pageVariants}>
            <ActiveLink href="/" className="activeClassName">
              <a>
                Mes expériences
              </a>
            </ActiveLink>
          </motion.div>
        </motion.div>
      </Styled>
    )
  }
}
export default(Experiences);