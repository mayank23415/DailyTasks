function dataSimpleInterest() {
    const principle = document.getElementById("principleAmount").value;
    const rate = document.getElementById("interestRate").value;
    const time = document.getElementById("timeDuration").value;

    if (time == 0 || principle == 0 || rate == 0) {
        alert(
            "Please enter valid data"
        )
    } else {
        let totalAmount = document.getElementById("totalAmount");
        totalAmount.innerHTML = simpleInterest(principle, time, rate);
    }
}




function simpleInterest(principle, time, rate) {
    const si = (principle * time * rate) / 100;
}