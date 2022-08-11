import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment name="dilmcphee" />
      <SingleComment name="shayini_venthan" />
      <SingleComment name="vickyrjoyal" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
