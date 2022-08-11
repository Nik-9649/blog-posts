import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/dilmcphee.jpg";
import profile2 from "./images/shayini_venthan.jpg";
import profile3 from "./images/vickyrjoyal.jpg";
import SingleComment from "./SingleComment";

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment
        profilePicture={profile1}
        name="dilmcphee"
        comment="Blossom"
      />
      <SingleComment
        profilePicture={profile2}
        name="shayini_venthan"
        comment="Hazel"
      />
      <SingleComment
        profilePicture={profile3}
        name="vickyrjoyal"
        comment="Alfred 👑"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
