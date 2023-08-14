import React from "react";
import { withRouter } from "react-router-dom";

export function Home(props) {
  function handleClick() {
    props.history.push("/user");
  }
  return (
    <>
      <h1>
        Hi, there , Yaswanth Here .. <p>Cloud & DevOps Engineer</p>
      </h1>
      <div>
        <button onClick={() => handleClick()}>Go to users</button>
      </div>
    </>
  );
}

export default withRouter(Home);
