import React from "react";

const SingleComment = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={profile1} alt="profile picture" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00PM</span>
        </div>
        <div className="text">Blossom</div>
      </div>
    </div>
  );
};

export default SingleComment;
