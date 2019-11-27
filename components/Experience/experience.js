//Base import
import React from "react";

//Styled
import WrapperStyle from './styled';

//Render
const Experience = props => (
  <WrapperStyle>
    <div>
      <h3>{props.data.name}</h3>
      {/*<Link href={{ pathname: '/photo', query: { id: props.id } }}>*/}
      {/*  <img src={`/static/art/${props.data.image}.jpg`} alt=""/>*/}
      {/*</Link>*/}
      {/*<div className="meta">*/}
      {/*  <p className="tagline">{props.data.tagline}</p>*/}
      {/*  <CommentsFunctionality*/}
      {/*    LikesEntry={() => props.LikesEntry(props.data.id)}*/}
      {/*    commentsNum={props.data.comments.length}*/}
      {/*    likes={props.data.likes} />*/}
      {/*</div>*/}
    </div>
  </WrapperStyle>
);

export default Experience;
