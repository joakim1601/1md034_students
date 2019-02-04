var myButton = document.getElementById('submit');

function info_form() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let house = document.getElementById("house").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let payment = document.getElementById("payment").value;
    let info = [fullname, email, street, house, gender, payment];

    return info;
}


// // You can pass a defined function as above (no parentheses), or provide an anonymous function
// myButton.onclick = function () {
//     console.log("BUTTON CLICKED");
//     console.log(info_form());
// }