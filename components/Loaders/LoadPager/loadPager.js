//Base import
import React from "react";

//Styled
import WrapperStyle from './styled';



//Render
const LoaderPage = props => (
  <WrapperStyle
    display={props.display}
  >
    <p>
      La page ce charge
    </p>
  </WrapperStyle>
);

export default LoaderPage;
