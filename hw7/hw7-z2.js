const form = document.getElementById("registration-form")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm-password").value

    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
        alert("Please fill out all of the required information.")
        return
    }

    if (password === confirmPassword) {
        alert(`Registration Successful! Your full name is: ${firstName} ${lastName}. Your email is: ${email}.`)
    } else {
        alert("Passwords do not match. Please try again.")
    }
})