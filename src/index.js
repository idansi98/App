import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";


init();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);


//We intillize the data base and adding the users.
async function init() {
  global.snackBarTimeout = null;
  global.currentUser = null;
  global.currentChat = null;
  global.lastMessageID = -1;
  global.currentConnection = null;

}



