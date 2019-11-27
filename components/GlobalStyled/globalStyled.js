//Base import
import React from "react";
import { createGlobalStyle } from 'styled-components';

//Reset de Mayer
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
    ${reset}
    a{
      text-decoration: none;
      color: #5E740B;
    }
    *{box-sizing: border-box;}
    html,
    body{
      height: 100%;
      > div{
        min-height: 100%;
      }
    }
`;

export default GlobalStyled;