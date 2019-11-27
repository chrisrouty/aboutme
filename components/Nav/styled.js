//Base import
import React from "react";

/*styled*/
import styled from "styled-components"

const WrapperStyle = styled.nav`
  ul{
    display: flex;
    li{
      margin-right: 40px;
      position: relative;
      &:last-child{
        margin-right: 0;
      }
      a{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        color: white;
        &:after{
          content: '';
          width: 100%;
          height: 4px;
          display: block;
          background-color: transparent;
          top: 22px;
          position: relative;
          transition: all ease .3s;
        }
        &.active,
        &:hover{
          transition: all ease .3s;
          color: #00EEFF;
          &:after{
            transition: all ease .3s;
            background-color: #00EEFF;
          }
        }
      }
    }
  }
`;

export default WrapperStyle;