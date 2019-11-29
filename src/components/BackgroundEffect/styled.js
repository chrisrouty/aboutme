import styled from "styled-components"

const WrapperStyle = styled.div`
  height: 100vh;
  background: url('${props => props.url}') no-repeat;
  overflow: hidden;
  background-size: calc(100% + 100px);
  background-position-x:${props => props.x};
  background-position-y:${props => props.y};
  transition: all ease;
`;

export default WrapperStyle;