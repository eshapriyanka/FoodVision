const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyDRphDHbeiKomj1Iev6MbrlL4LOj2qg8_s",
  authDomain: "foodvision-9284a.firebaseapp.com",
  databaseURL: "https://foodvision-9284a-default-rtdb.firebaseio.com",
  projectId: "foodvision-9284a",
  storageBucket: "foodvision-9284a.firebasestorage.app",
  messagingSenderId: "49341465857",
  appId: "1:49341465857:web:076a5d14625b6a3a3c8700",
  measurementId: "G-88B6W2388L",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var foodvisionB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};