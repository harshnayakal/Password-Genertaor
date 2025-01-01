document.addEventListener("DOMContentLoaded", () => {
    const passwordBox = document.getElementById("password");
    const length = 12;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$%^&*()_+~|}{[]></-=";
    const allChars = upperCase + lowerCase + numbers + symbols;

    function createPassword() {
        let password = "";
        password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));

        while (password.length < length) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        passwordBox.value = password;
    }

    function copyPassword() {
        if (passwordBox.value) {
            navigator.clipboard.writeText(passwordBox.value)
                .then(() => alert("Password copied to clipboard"))
                .catch(err => alert("Failed to copy password"));
        } else {
            alert("No password to copy!");
        }
    }

    // Expose functions to global scope for button events
    window.createPassword = createPassword;
    window.copyPassword = copyPassword;
});
