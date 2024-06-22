// script.js
const keyValuePairs = []; // Initialize an empty array to store key-value pairs

// Function to generate JSON and handle Enter key press
function generateJsonObject() {
    const keyInput = document.getElementById('keyInput');
    const valueInput = document.getElementById('valueInput');
    const key = keyInput.value;
    const value = valueInput.value;

    if (key && value) {
        const jsonObject = { [key]: value };
        keyValuePairs.push(jsonObject); // Add the new key-value pair to the array
        document.getElementById('jsonOutput').textContent = JSON.stringify(keyValuePairs, null, 2);

        // Clear the input fields
        keyInput.value = '';
        valueInput.value = '';

        // Automatically select the first text box
        keyInput.focus();
    } else {
        alert('Please enter both a key and a value.');
    }
}

// Handle Enter key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generateJsonObject();
    }
});
