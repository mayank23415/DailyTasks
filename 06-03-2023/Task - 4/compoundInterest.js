function dataCompoundInterest() {
    const principle = document.getElementById("principleAmount").value;
    const rate = document.getElementById("interestRate").value;
    const time = document.getElementById("timeDuration").value;
    const interval = document.getElementById("comFrequency").value;


    if (time == 0 || principle == 0 || rate == 0 || interval == 0) {
        alert(
            "Please enter valid data"
        )
    } else {
        let totalAmount = document.getElementById("totalAmount");
        totalAmount.innerHTML = compoundInterest(principle, rate, time, interval);
    }
}



function compoundInterest(principle, rate, time, interval) {
    const amount = principle * (Math.pow((1 + (rate / (interval * 100))), (interval * time)));
    let ci = amount - principle;
    return ci;
}