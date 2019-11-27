import styled from "styled-components";

const WrapperStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 15px 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  > .logo{
    margin-right: 40px;
  }

`;

export default WrapperStyle;