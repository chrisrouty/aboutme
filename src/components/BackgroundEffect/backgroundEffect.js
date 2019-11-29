//Base import
import React, { Component } from "react";

//Styled
import WrapperStyle from './styled';

//Components

//Render
class BackgroundEffect extends Component{

  mouseEffect(){
    const el = document.querySelector(".bgEffect");
    const movement = 100;
    const H = movement / window.innerHeight;
    const W = movement / window.innerWidth;

    //init position
    el.style.backgroundPositionX = 50 + "%";
    el.style.backgroundPositionY = 50 + "%";

    //When mouse OUT document
    document.addEventListener('mouseleave', (e) =>{
      el.style.backgroundPositionX = 50 + "%";
      el.style.backgroundPositionY = 50 + "%";
    })

    //When mouse IN and MOVE document
    el.addEventListener("mousemove", (e) => {
      const moveX = e.pageX - (window.innerWidth / 2);
      const moveY = e.pageY - (window.innerHeight / 2);
      const valueX = W * moveX * - 1;
      const valueY = H * moveY * - 1;
      el.style.backgroundPositionX = 50-valueX + "%";
      el.style.backgroundPositionY = 50-valueY + "%";
    });
  }

  componentDidMount() {
    this.mouseEffect();
  }

  render(){
    return(
      <WrapperStyle
        url={ this.props.pathImage }
        className="bgEffect"
      >
        { this.props.children }
      </WrapperStyle>
    )
  }
}

export default(BackgroundEffect);