//Base import
import React from "react";

//Styled
import WrapperStyle from './styled'

//Components
import Header from '../Header/header'

//Render
const Layout = props => (
  <WrapperStyle>
    <Header />
    {props.children}
  </WrapperStyle>
);


export default Layout;