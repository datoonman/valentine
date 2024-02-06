const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
let previousMessage = '';

yesButton.addEventListener("click", function() {
    const messageElement = document.getElementById("message");

    // Change the text content to include a heart symbol
    messageElement.textContent = "You're now mine ❤️";
    
    // Highlight the main text with cute animations and styles
    messageElement.style.fontSize = "2em"; // Increase font size
    messageElement.style.fontWeight = "bold"; // Make text bold
    messageElement.style.color = "#ff69b4"; // Change text color to a cute pink
    messageElement.style.transition = "font-size 1s, color 1s"; // Add transition for smooth animation
    
    // Cute animations
    messageElement.classList.add("cute-animation");

    // Hide both "Yes" and "No" buttons
    yesButton.style.display = "none";
    noButton.style.display = "none";
});

noButton.addEventListener("click", function() {
    const messages = ["Really?", "Try Again!", "Last Chance!", "You'll regret it...", "PLeaseee", "WHYYY"];
    
    const filteredMessages = messages.filter(message => message !== previousMessage);
    const randomMessage = filteredMessages[Math.floor(Math.random() * filteredMessages.length)];
    document.getElementById("message").textContent = randomMessage;
    previousMessage = randomMessage;

    const currentWidthYes = parseFloat(window.getComputedStyle(yesButton).width);
    const currentHeightYes = parseFloat(window.getComputedStyle(yesButton).height);
    const currentFontSizeYes = parseFloat(window.getComputedStyle(yesButton).fontSize);

    yesButton.style.cssText = `width: ${currentWidthYes * 1.5}px; height: ${currentHeightYes * 1.5}px; font-size: ${currentFontSizeYes * 1.65}px`;
});
