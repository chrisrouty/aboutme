//Base import
import React from "react";

//Styled
import WrapperStyle from './styled';

//Components

//Public
// import LogoImg from '../../public/img/logo.svg';

//Render
const Footer = props => (
  <WrapperStyle>
    <div className='logo'>
      <img src={LogoImg} alt='Christophe Routy' />
    </div>
  </WrapperStyle>
);

export default Footer;
 