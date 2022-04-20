import chatHandler from "./chatFunctions";
function DisplayNameInputBox() {
    var dispalyNameToSearch = document.getElementById("DisplayNameInput");
    var foundDisplayName = chatHandler.findUserDisp(dispalyNameToSearch);
    if (dispalyNameToSearch === global.currentUser.displayname) {
        alert("You can't start messaging yourself!");
        var audio = new Audio('donkey.ogg');
        audio.play();
        return;
      }
    if (foundDisplayName == null) {
        alert("User not found");
        var audio = new Audio('donkey.ogg');
        audio.play();
        return;
    }
   

    return (
        <span id ="Hey">
        <input type="text" className="form-control" placeholder="Displayname"
         aria-label="Username" aria-describedby="basic-addon1" id="DisplayNameInput"/>
         </span>
    )}
    export default DisplayNameInputBox;