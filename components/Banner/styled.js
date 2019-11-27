/*styled*/
import styled from "styled-components"

const WrapperStyle = styled.div`
  width: 100%;
  height: 485px;
  overflow: hidden;
  background: url('${props => props.cssImg}');
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  h2{
    font-family: 'Calistoga', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    line-height: 55px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    color: white;
  }
`;

export default WrapperStyle;