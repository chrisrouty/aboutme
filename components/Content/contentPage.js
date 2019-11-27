//Base import
import React from "react";

//Styled
import WrapperStyle from './styled';


//Render
const ContentPage = props => (
  <WrapperStyle>
    <div>
      {props.children}
    </div>
  </WrapperStyle>
);

export default ContentPage;