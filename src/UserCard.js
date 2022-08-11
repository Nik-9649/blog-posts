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
    </div>
  );
};

export default UserCard;
