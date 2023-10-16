import React from "react";
import ReactDOM from "react-dom";
import Routes from "./LoginPage/Routes";

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
