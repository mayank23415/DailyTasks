function register() {
    let fullName = getName();
    //console.log(fullName);
    let course = getCourse();
    //console.log(course);
    let gender = getGender();
    //console.log(gender);
    let number = getNumber();
    //console.log(number);
    let email = getEmail();
    //console.log(email);

    let password = getPassword();
    console.log(password);

    let showInfo = document.getElementById("showInfo");
    showInfo.innerHTML += fullName + "<br>" + course + "<br>" + gender + "<br>" + number + "<br>" + email + "<br>";
}

function getName() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1, firstName.length);
    if(firstName != "" && lastName != "") {
        return firstName + " " + lastName;
    }else {
        alert("Enter First and Last name");
    }
}

function getCourse() {
    let selectedCourse = document.getElementById("course");
    
    if(selectedCourse.value != "Course"){
        return selectedCourse.value;
    }else {
        alert("Please select a course");
    }
}

function getGender() {
    let selectedGender = document.querySelector('input[name = "Gender"]:checked');
    try{
        var gender = selectedGender.value;
    }catch(e) {
        alert("Please select gender");
    }finally {
        return gender;
    }
}

function getNumber() {
    let number = document.getElementById("phoneNumber").value;

    if(number.length == 10) {
        return number;
    }else {
        alert("Enter valid phone number");
    }
}

function getEmail() {
    let email = document.getElementById("email").value;
    return email;
}




function getPassword() {
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;
    if(password != "" && rePassword != "") {
        if(password == rePassword) {
            if(password.length >= 6) {
                let pass = password;
                let numbers = pass.replace(/\D/g, '').length;
                if(numbers >=1) {
                    return password;
                }else {
                    alert("Password should contain numbers");
                }
            }else {
                alert("Password too short");
            }
        }else {
            alert("Re-confirm password");
        }
    }else {
        alert("Enter password");
    }
}

function passwordRules() {
    alert("The password should contain atleast six character including numbers.")
}

function phoneRules() {
    alert("Phone number should contain 10 digits")
}