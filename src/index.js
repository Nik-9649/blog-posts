import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/dilmcphee.jpg";
import profile2 from "./images/shayini_venthan.jpg";
import profile3 from "./images/vickyrjoyal.jpg";

const App = () => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" calssName="avatar">
          <img src={profile1} alt="profile picture" width="193" height="130" />
        </a>
        <div className="content">
          <a className="author">dilmcphee</a>
          <div className="metadata">
            <span className="date">Today at 5:00PM</span>
            <div className="text">Blossom</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
