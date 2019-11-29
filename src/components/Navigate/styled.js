import styled from "styled-components";

import forme1 from "../../public/svg/forme1.svg"

const Styled = styled.nav`
  /* background: url('${forme1}') no-repeat; */
  ul{
    display: inline-block;
    position: relative;
    left: 150px;
    li{
      margin: 20px 0;
      display: block;
      a{
        font-family: 'Oranienbaum', sans-serif;
        font-size: 30px;
        line-height: normal;
        color: #5C5C5C;
        transition: all ease .3s;
        display: inline-block;
        cursor: pointer;
        &:hover{
          transform: scale(2) !important;
          transition: all ease .3s;
        }
      }
    }
  }
`;

export default Styled;