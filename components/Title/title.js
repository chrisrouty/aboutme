//Base import
import React from "react";

//Styled
import WrapperStyle from './styled';

//Config Components

//Render
const Title = props => (
  <WrapperStyle>
    {props.children}
  </WrapperStyle>
);

export default Title;