import React from "react";

const UserCard = props => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="description">
          Hello my name is Alex. I live in Istanbul.
        </div>
      </div>
      <div className="ui button button">
        <i className="add icon"></i>
        Add Friend
      </div>
    </div>
  );
};

export default UserCard;
