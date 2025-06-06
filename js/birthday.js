const firebaseConfig = {
    apiKey: "AIzaSyA58mf_4HH8fGPR7tAspl4FwBGFmwwADR0",
    authDomain: "birthday-guestbook.firebaseapp.com",
    projectId: "birthday-guestbook",
    storageBucket: "birthday-guestbook.firebasestorage.app",
    messagingSenderId: "512158398529",
    appId: "1:512158398529:web:4741b9a8e3a001f377eec0",
    measurementId: "G-9H83GBXR4G"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// Reference to the form and wall
const form = document.getElementById("birthdayForm");
const wall = document.getElementById("wall");

// 📌 Load existing entries from Firestore on page load
window.addEventListener("DOMContentLoaded", () => {
  db.collection("guestbook")
    .orderBy("timestamp")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        addEntryToWall(data.name, data.message, data.photo);
      });
    })
    .catch(err => {
      console.error("Error loading entries:", err);
    });
});

// 📝 Add new entry on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const file = document.getElementById("photo").files[0];

  if (!file) {
    console.error("No file uploaded");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const base64Photo = e.target.result;

    // ✅ Save to Firestore
    db.collection("guestbook").add({
      name,
      message,
      photo: base64Photo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      console.log("Saved to Firestore ✅");
      addEntryToWall(name, message, base64Photo);
      form.reset();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }).catch((err) => {
      console.error("Firestore error:", err);
    });
  };

  reader.onerror = function () {
    console.error("FileReader error:", reader.error);
  };

  reader.readAsDataURL(file);
});


// 📦 Add entry to the DOM
function addEntryToWall(name, message, photoDataURL) {
  const entry = document.createElement("div");
  entry.className = "entry";

  const img = document.createElement("img");
  img.src = photoDataURL;

  const textDiv = document.createElement("div");
  textDiv.className = "text";
  textDiv.innerHTML = `<strong>${name}</strong><br><em>${message}</em>`;

  entry.appendChild(img);
  entry.appendChild(textDiv);

  document.getElementById("wall").appendChild(entry);
}
