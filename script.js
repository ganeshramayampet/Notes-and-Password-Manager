// Splash screen functionality
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.splash-screen').classList.add('hidden');
    }, 1000); // 1 second splash screen
});

// Password Generation
document.getElementById('generateBtn').addEventListener('click', function() {
    const length = parseInt(document.getElementById('passwordLength').value);
    if (length && length >= 5) {
        document.getElementById('generatedPassword').value = generatePassword(length);
    } else {
        alert("Please enter a length of at least 5.");
    }
});

function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Text Encryption and Decryption (simple example)
document.getElementById('encryptBtn').addEventListener('click', function() {
    const text = document.getElementById('encryptText').value;
    const key = document.getElementById('encryptKey').value;
    document.getElementById('encryptedText').value = btoa(key + text);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const encryptedText = document.getElementById('decryptText').value;
    const key = document.getElementById('decryptKey').value;
    try {
        const decryptedText = atob(encryptedText).replace(key, '');
        document.getElementById('decryptedText').value = decryptedText;
    } catch (e) {
        alert("Decryption failed. Please check your key and encrypted text.");
    }
});

// Manage Passwords
let passwords = [];

document.getElementById('storeBtn').addEventListener('click', function() {
    const accountName = document.getElementById('accountName').value;
    const accountPassword = document.getElementById('accountPassword').value;
    if (accountName && accountPassword) {
        passwords.push({ account: accountName, password: accountPassword });
        document.getElementById('accountName').value = '';
        document.getElementById('accountPassword').value = '';
    }
});

document.getElementById('getAllPasswordsBtn').addEventListener('click', function() {
    const passwordList = document.getElementById('passwordList');
    passwordList.innerHTML = '';
    passwords.forEach((entry, index) => {
        const div = document.createElement('div');
        div.innerHTML = `${entry.account}: ${entry.password} <button style="color:red;" onclick="deletePassword(${index})">Delete</button>`;
        passwordList.appendChild(div);
    });
});

function deletePassword(index) {
    passwords.splice(index, 1);
    document.getElementById('getAllPasswordsBtn').click();
}

// Manage Notes
let notes = [];

document.getElementById('addNoteBtn').addEventListener('click', function() {
    const noteText = document.getElementById('noteText').value;
    if (noteText) {
        notes.push(noteText);
        document.getElementById('noteText').value = '';
    }
    displayNotes();
});

document.getElementById('getAllNotesBtn').addEventListener('click', function() {
    displayNotes();
});

function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';
    notes.forEach((note, index) => {
        const div = document.createElement('div');
        div.innerHTML = `${note} <button style="color:red;" onclick="deleteNote(${index})">Delete</button>`;
        noteList.appendChild(div);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}
