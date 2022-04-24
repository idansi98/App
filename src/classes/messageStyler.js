const leftStyle =
  "blueMessage messageRestrictWidth bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded";
const rightStyle =
  "greenMessage messageRestrictWidth bg-success p-2 mt-2 mr-5 shadow-sm text-white float-right rounded rightMessage";

  //This function returns the correct formatted time string using the time get methods. 
function formatAMPM(backThen) {
  var rightNow = new Date();
  var dateRN = rightNow.getDate();
  var monthRN = rightNow.getMonth();
  var yearRN = rightNow.getYear();

  var date = backThen.getDate();
  var month = backThen.getMonth();
  var year = backThen.getYear();

  if (date !== dateRN || month !== monthRN || year !== yearRN) {
    var strTime = date + "/" + month + "/" + year;
    return strTime;
  } else {
    var hours = backThen.getHours();
    var minutes = backThen.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
}

function getMessageStyleByUser(user) {
  if (user === global.currentUser) {
    return leftStyle;
  } else {
    return rightStyle;
  }
}

// a function I found for adding url to messages with ease

export default { formatAMPM, getMessageStyleByUser };
