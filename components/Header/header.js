//Base import
import React from "react";

//Styled
import WrapperStyle from './styled';

//Components
import Nav from "../Nav/nav";

//Public
import LogoImg from '../../public/img/logo.svg';

//Render
const Header = props => (
  <WrapperStyle>
    <div className='logo'>
      <img src={LogoImg} alt='Christophe Routy' />
    </div>
    <Nav />
  </WrapperStyle>
);

export default Header;
