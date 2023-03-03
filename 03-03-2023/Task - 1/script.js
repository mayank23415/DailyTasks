// getMonthName method starts execution when onclick
// event occurs 

function getMonthName() {
    var monthNumber = document.getElementById("monthNumber");
    var printMonthName = document.getElementById("printMonthName");
    let monthName;
    //try catch and finally are used in case of 
    //any invalid input or undefined output.
    try{
        //Try reads the output of method getMonth
        monthName = getMonth(monthNumber);
    } catch(e) {
        //catch reads exception from getMonth 
        console.error(e);
        alert(e.message);
    } finally {
        //finally sets the innerHTML of printMonthName
        printMonthName.innerHTML = monthName;
    }
}

//getMonth method is called by getMonthName method
function getMonth(monthNumber){
    console.log("getMonth initiated");
    //month is user input
    let month = monthNumber.value;
    month--;
    //months array stores name of all months
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    //if checks for validity of input and returns month
    //name.
    if(months[month]) {
        console.log("Send Month Name");
        return months[month];
    } else {
        //else statement throws error when the input is
        //invalid.
        console.log("Throw exception");
        throw new Error("Invalid Month");
    }
}