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

    // Disable visibility of the "no" button
    noButton.style.visibility = "hidden";
    
    // Disable the "Yes" button
    yesButton.disabled = true;
});

noButton.addEventListener("click", function() {
    const messages = ["Really?", "Try Again!", "Last Chance!", "You'll regret it...", "PLeaseee", "WHYYY"];
    
    // Remove the previously displayed message from the array
    const filteredMessages = messages.filter(message => message !== previousMessage);
    
    const randomMessage = filteredMessages[Math.floor(Math.random() * filteredMessages.length)];
    document.getElementById("message").textContent = randomMessage;
    
    // Store the current message as the previous message
    previousMessage = randomMessage;
    
    // Increase the width and height of the Yes button
    const currentWidthYes = parseFloat(window.getComputedStyle(yesButton).width);
    const currentHeightYes = parseFloat(window.getComputedStyle(yesButton).height);
    const newWidthYes = currentWidthYes * 1.5;
    const newHeightYes = currentHeightYes * 1.5;
    yesButton.style.width = newWidthYes + 'px'; // Increase width by 1.5 times
    yesButton.style.height = newHeightYes + 'px'; // Increase height by 1.5 times
    
    // Scale up the font size of the Yes button text
    const currentFontSizeYes = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const newFontSizeYes = currentFontSizeYes * 1.65;
    yesButton.style.fontSize = newFontSizeYes + 'px';
});
