/*styled*/
import styled from "styled-components"

const WrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => props.display ? 'flex' : 'none'};
  opacity: ${props => props.display ? '1' : '0'};
  overflow: ${props => props.display ? 'visible' : 'hidden'};
  transition: all ease .5s;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  z-index: 9;
  p{
    color: white;
    font-size: 28px
  }
`;

export default WrapperStyle;