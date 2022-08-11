import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment name="dilmcphee" comment="Blossom" />
      <SingleComment name="shayini_venthan" comment="Hazel" />
      <SingleComment name="vickyrjoyal" comment="Alfred 👑" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
