// Function to encrypt text using Caesar Cipher
function encrypt(text, key) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-zA-Z]/)) {
            const isUpperCase = char === char.toUpperCase();
            const offset = isUpperCase ? 65 : 97;
            const encryptedChar =
                String.fromCharCode(((char.charCodeAt(0) - offset + parseInt(key)) % 26) + offset);
            result += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
        } else {
            result += char;
        }
    }

    return result;
}

// Function to decrypt text using Caesar Cipher
function decrypt(text, key) {
    return encrypt(text, -key); // Decryption is just encryption with a negative key
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    const textArea = document.getElementById('text');
    const encryptButton = document.getElementById('encrypt');
    const decryptButton = document.getElementById('decrypt');
    const keyInput = document.getElementById('key');

    encryptButton.addEventListener('click', function () {
        const plaintext = textArea.value;
        const key = parseInt(keyInput.value);
        const ciphertext = encrypt(plaintext, key);
        textArea.value = ciphertext;
    });

    decryptButton.addEventListener('click', function () {
        const ciphertext = textArea.value;
        const key = parseInt(keyInput.value);
        const plaintext = decrypt(ciphertext, key);
        textArea.value = plaintext;
    });
});
