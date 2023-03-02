// Inner HTML sets or returns the HTML content
// of an element.
function innerHtmlMethod(){
    var para = document.getElementById("para1");
    para.innerHTML = "Inner HTML is used to print this text.";
}

//Document.write method writes directly to an open(HTML)
//document stream. It is useful for testing.
function writeMethod(){
    document.write("Document.write is used to print this text.");
}

//The alert() method displays an alert box with a message 
//and an OK button.
function alertMethod(){
    window.alert("window.alert is used to print this text.");
}

//The log() method writes (logs) a message to the console.
//It is useful for debuggin purposes.
function logMethod(){
    console.log("console.log is used to print this text.");
}