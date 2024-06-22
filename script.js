// script.js
const keyValuePairs = []; // Initialize an empty array to store key-value pairs

function generateJsonObject() {
    const key = document.getElementById('keyInput').value;
    const value = document.getElementById('valueInput').value;

    if (key && value) {
        const jsonObject = { [key]: value };
        keyValuePairs.push(jsonObject); // Add the new key-value pair to the array
        document.getElementById('jsonOutput').textContent = JSON.stringify(keyValuePairs, null, 2);
    } else {
        alert('Please enter both a key and a value.');
    }
}
