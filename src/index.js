import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/dilmcphee.jpg";
import profile2 from "./images/shayini_venthan.jpg";
import profile3 from "./images/vickyrjoyal.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard />
      <SingleComment
        profilePicture={profile1}
        name="dilmcphee"
        comment="Blossom"
        date="Today at 5:10PM"
      />
      <SingleComment
        profilePicture={profile2}
        name="shayini_venthan"
        comment="Hazel"
        date="Yesterday"
      />
      <SingleComment
        profilePicture={profile3}
        name="vickyrjoyal"
        comment="Alfred 👑"
        date="Jan 12, 2021"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
