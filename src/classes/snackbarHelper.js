function showMessage(message) {
  var snackbar = document.getElementById("snackbar");
  if (snackbar !== null) {
    console.log("SNACKBAR ISNT NULL");
    if (global.snackBarTimeout !== null) {
      console.log("TIMEOUT ISNT NULL");
      clearTimeout(global.snackBarTimeout);
    } else {
      snackbar.className = "show " + snackbar.className;
    }
    // Add the "show" class to DIV
    snackbar.textContent = message;
    // After 3 seconds, remove the show class from DIV
    global.snackBarTimeout = setTimeout(function () {
      snackbar.className = snackbar.className.replace("show ", "");
      global.snackBarTimeout = null;
    }, 3000);
  }
}

function setClass(className) {
  var snackbar = document.getElementById("snackbar");
  if (snackbar !== null) {
    snackbar.className = className;
    if (global.snackBarTimeout !== null) {
      clearTimeout(global.snackBarTimeout);
      global.snackBarTimeout = null;
    }
  }
}

export default { showMessage, setClass };
