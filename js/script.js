document.getElementById("button").addEventListener("click", function() {
    let name = document.forms['contactus-form']['name'].value;
    let email = document.forms['contactus-form']['email'].value;
    let interest = document.forms ['contactus-form'] ['interest'].value

    if (!name) {
        document.getElementById("name-error").innerText = "Name cannot be blank";
    }

    if (!email) {
        document.getElementById("email-error").innerText = "Email cannot be blank";
    }

    if (!interest) {
        document.getElementById("interest-error").innerText = "Interest cannot be blank";
    }
})