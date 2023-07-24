const languageSelect = document.getElementById("language-select");
const greetingElement = document.getElementById("greeting");

// Function to handle language change
function changeLanguage() {
    // Get the selected language code
    const selectedLanguage = languageSelect.value;
    
    // Set the language code as the value of the lang attribute in <html>
    document.documentElement.lang = selectedLanguage;

    //  Update the greeting text based onthe selected language
    if (selectedLanguage === "en") {
        greetingElement.textContent = "Hello!";
    } else if (selectedLanguage === "es") {
        greetingElement.textContent = "¡Hola!";
    } else if (selectedLanguage === "ar") {
        greetingElement.textContent = "مرحبًا!";
    }
    // Add more conditions for other languages as needed
}

// Event listener for changes in the language selection
languageSelect.addEventListener("change", changeLanguage);

// Call the changeLanguage function on initial page load
changeLanguage();