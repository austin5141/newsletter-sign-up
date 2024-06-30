const submit = document.querySelector(".submitButton")
const dismiss = document.querySelector(".dismissButton")
const formbox = document.querySelector(".flexbox")
const successbox = document.querySelector(".successbox")
const errorText = document.querySelector(".emailError")
const strong = document.querySelector("strong")

submit.addEventListener("click", function(event){
    event.preventDefault();
    const email = document.querySelector("input")
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validEmail.test(email.value)) {
        formbox.classList.toggle("hidden")
        successbox.classList.toggle("hidden")
        errorText.textContent = ""
        email.classList.remove("error")
        strong.textContent = email.value
    } else {
        email.classList.add("error")
        errorText.textContent = "Valid email required"
    }
})

dismiss.addEventListener("click", function(event) {
    event.preventDefault();
    successbox.classList.toggle("hidden")
    formbox.classList.toggle("hidden")
})