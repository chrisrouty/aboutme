//Base import
import React from "react";

//Styled
import WrapperStyle from './styled';

//Components
import Title from "../Title/title";

//Render
const Banner = props => (
  <WrapperStyle
      cssImg={ props.bgBanner }
  >
    <div>
      {props.children}
    </div>
  </WrapperStyle>
);

export default Banner;