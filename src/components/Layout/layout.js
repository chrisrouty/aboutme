//Base import
import React from "react";

//Styled
import Styled from './styled'

//Components

//Render
const Layout = props => (
  <Styled>
    {props.children}
  </Styled>
);


export default Layout;