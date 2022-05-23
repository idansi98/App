import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import alicePic from "../src/Media/alice.webp";
import bobPic from "../src/Media/bob.webp";
import suspiciousPic from "../src/Media/suspicious.png";
import defaultPFP from "../src/Media/defaultPFP.png";
import chatHandler from "./chatStuff/chatFunctions";
import sound from "../src/Media/sound.mp3";
import earthVideo from "../src/Media/earth.mp4";

init();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

function fillMessages() {
  chatHandler.addUser("Idan", "Idan Simai", suspiciousPic, "Simai");
  chatHandler.addUser("Ido", "Ido Tziony", defaultPFP, "Tziony");
  chatHandler.addUser("1", "Bob Habanai", bobPic, "2");
  chatHandler.addUser("2", "Leo", defaultPFP, "3");
  chatHandler.addUser("3", "James", defaultPFP, "4");
  chatHandler.addUser("4", "Hemi.Hemi", defaultPFP, "5");
  chatHandler.addUser("Alice", "Alis", alicePic, "Alice");
  chatHandler.addUser("Guest", "Guest",defaultPFP,"12345");
  var idan = chatHandler.findUser("Idan");
  var ido = chatHandler.findUser("Ido");
  var alice = chatHandler.findUser("Alice");
  var bob = chatHandler.findUser("1");
  var leo = chatHandler.findUser("2");
  var james = chatHandler.findUser("3");
  var hemi = chatHandler.findUser("4");
  var guest = chatHandler.findUser("Guest");
  tempAddExampleChats(guest);
  chatHandler.sendTextMessage(idan, ido, "hi");
  chatHandler.sendTextMessage(idan, ido, "how are you?");
  chatHandler.sendTextMessage(ido, idan, "I am fine, thanks!");
  chatHandler.sendTextMessage(alice, idan, "HI IDAN!");
  chatHandler.sendTextMessage(
    bob,
    idan,
    "YO I AM BOB LMAO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
  );
  chatHandler.sendTextMessage(
    idan,
    bob,
    "AGSKLKGLASPKG:LASKG:LASKGL:KAS:LGKAL:SGK:ASKG:LASKG:LKASL:GK:LASKG:LAKSGL:"
  );
}

function tempAddExampleChats(currentUser) {
  var idan = chatHandler.findUser("Idan");
  var ido = chatHandler.findUser("Ido");
  var alice = chatHandler.findUser("Alice");
  var bob = chatHandler.findUser("1");
  var leo = chatHandler.findUser("2");
  var james = chatHandler.findUser("3");
  var hemi = chatHandler.findUser("4");

  chatHandler.sendTextMessage(currentUser, ido, "hi");
  chatHandler.sendTextMessage(ido, currentUser, "how are you?");
  chatHandler.sendImageMessage(currentUser, ido, suspiciousPic);
  chatHandler.sendTextMessage(
    ido,
    currentUser,
    "Stop sending me propoganda please :C"
  );
  chatHandler.sendImageMessage(currentUser, ido, suspiciousPic);
  chatHandler.sendTextMessage(ido, currentUser, "Hmmm");
  chatHandler.sendTextMessage(
    idan,
    currentUser,
    "Did you watch the last batman movie?"
  );
  chatHandler.sendTextMessage(currentUser, idan, "I sure didn't!");
  chatHandler.sendAudioMessage(idan, currentUser, sound);
  chatHandler.sendTextMessage(currentUser, idan, "Nice trt");
  chatHandler.sendTextMessage(currentUser, idan, "Nice try*");
  chatHandler.sendTextMessage(currentUser, alice, "Hi...");
  chatHandler.sendTextMessage(currentUser, alice, "Whats up alice?");
  chatHandler.sendTextMessage(
    currentUser,
    alice,
    "ALICE IS EVERYTHING OKAY?"
  );
  chatHandler.sendTextMessage(currentUser, alice, "ALICE ANSWER ME");
  chatHandler.sendTextMessage(currentUser, alice, "THATS IT");
  chatHandler.sendVideoMessage(currentUser, alice, earthVideo);
  chatHandler.sendTextMessage(
    alice,
    currentUser,
    "Please delete my number..."
  );

  chatHandler.sendTextMessage(
    bob,
    currentUser,
    "YO I AM BOB HELLO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
  );
  chatHandler.sendImageMessage(currentUser, bob, suspiciousPic);
  chatHandler.sendTextMessage(
    bob,
    currentUser,
    "YO I AM BOB HELLO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
  );
  chatHandler.sendAudioMessage(bob, currentUser, sound);
  chatHandler.sendTextMessage(
    bob,
    currentUser,
    "YO I AM BOB HELLO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
  );
  chatHandler.sendVideoMessage(currentUser, bob, earthVideo);
  chatHandler.sendTextMessage(
    bob,
    currentUser,
    "YO I AM BOB HELLO LONG MESSSAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
  );

  chatHandler.sendTextMessage(leo, currentUser, "Good video!");
  chatHandler.sendTextMessage(currentUser, leo, "?");

  chatHandler.sendTextMessage(james, currentUser, "I am James!");
  chatHandler.sendTextMessage(currentUser, james, "I am James!");
  chatHandler.sendTextMessage(james, currentUser, "I am James!");
  chatHandler.sendTextMessage(currentUser, james, "I am James!");
  chatHandler.sendTextMessage(james, currentUser, "I am James!");
  chatHandler.sendTextMessage(currentUser, james, "I am James!");
  chatHandler.sendTextMessage(james, currentUser, "I am James!");
  chatHandler.sendTextMessage(currentUser, james, "I am James!");
  chatHandler.sendTextMessage(james, currentUser, "I am James!");
  chatHandler.sendTextMessage(currentUser, james, "I am James!");
  chatHandler.sendTextMessage(james, currentUser, "I am James!");
  chatHandler.sendTextMessage(currentUser, james, "I am James!");

  chatHandler.sendTextMessage(
    hemi,
    currentUser,
    "I am going to make the next homework more interesting!"
  );
}


//We intillize the data base and adding the users.
async function init() {
  global.snackBarTimeout = null;
  global.currentUser = null;
  global.currentChat = null;
  global.lastMessageID = -1;
  global.currentConnection = null;

  //chatHandler.initDB();
  //fillMessages();
}



