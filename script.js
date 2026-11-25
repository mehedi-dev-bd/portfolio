const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();
    const agreeCheck = document.getElementById("agreeCheck").checked;
    const replyMethod = document.querySelector('input[name="replyMethod"]:checked').value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");
    const checkError = document.getElementById("checkError");
    const successMsg = document.getElementById("successMsg");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    checkError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    if (fullName === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    } else if (fullName.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Please enter your email address.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent = "Please select a topic.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Please write your message.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long.";
        isValid = false;
    }

    if (!agreeCheck) {
        checkError.textContent = "Please confirm that your information is accurate.";
        isValid = false;
    }

    if (isValid) {
        successMsg.textContent = "Thank you, " + fullName + "! Your message regarding '" + subject + "' has been sent. We will reply via " + replyMethod + ".";
        contactForm.reset();
    }
});