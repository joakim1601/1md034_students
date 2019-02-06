var myButton = document.getElementById('submit');


function info_form() {
    let fullname = "Full name: " + document.getElementById("fullname").value
    let email = "Email: " + document.getElementById("email").value;
    let street = "Street: " + document.getElementById("street").value;
    let house = "House: " + document.getElementById("house").value;
    let gender = "Gender: " + document.querySelector('input[name="gender"]:checked').value;
    let checkedBurgers = "Burgers:" + [...document.querySelectorAll('#burgerSection input:checked')].map(x => " " + x.value);
    let payment = "Payment: " + document.getElementById("payment").value;
    let info = [fullname, email, street, house, gender, payment, checkedBurgers];

    return info;
}

/*
var infoArray = [{
    "fullname": document.getElementById("fullname").value,
    "email": document.getElementById("email").value,
    "street": document.getElementById("street").value,
    "house": document.getElementById("house"),
    "gender": document.querySelector('input[name="gender"]:checked').value,
    "payment": document.getElementById("payment").value,
}]
*/


// // You can pass a defined function as above (no parentheses), or provide an anonymous function
// myButton.onclick = function () {
//     console.log("BUTTON CLICKED");
//     console.log(info_form());
// }