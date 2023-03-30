// nav btn
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})
close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA-Kp7Lh6PHGyjnZdY439rVBXheUV_Cxr8",
    authDomain: "comment-section-c268d.firebaseapp.com",
    databaseURL: "https://comment-section-c268d-default-rtdb.firebaseio.com",
    projectId: "comment-section-c268d",
    storageBucket: "comment-section-c268d.appspot.com",
    messagingSenderId: "183451144688",
    appId: "1:183451144688:web:290e0d975f7eab776d8d35",
    measurementId: "G-4Y6Z78LFFV"
  };
  
  firebase.initializeApp(firebaseConfig);
  
// Reference messages collection
var messagesRef1 = firebase.database().ref('cryptomessages');
  
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Listen for value events on the messages reference
messagesRef1.on('value', function(snapshot) {
  // Clear the message list
  var messageList = document.getElementById('messages');
  messageList.innerHTML = '';

  // Get the data from the snapshot
  var messagesData = snapshot.val();

  var messagesDataArray = Object.values(messagesData);
messagesDataArray.sort(function(a, b) {
  return b.timestamp - a.timestamp;
});
for (var i = 0; i < messagesDataArray.length; i++) {
  var message = messagesDataArray[i];
  displayMessage(message.name, message.message, message.timestamp);
}
});

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Validate email
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Save message
  saveMessage1(name, email, message);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to validate email
function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
function displayMessage(name, message, timestamp){
  var messageList = document.getElementById('messages');

  // Create elements for message
  var div = document.createElement('div');
  div.className = 'card';
  var divCardBody = document.createElement('div');
  divCardBody.className = 'card-body';
  var h5 = document.createElement('h3');
  h5.className = 'card-title';
  h5.innerText = name;
  var p = document.createElement('p');
  p.className = 'card-text';
  p.innerText = message;
  var small = document.createElement('small');
  small.className = 'text-muted';
  small.innerText = new Date(timestamp).toLocaleString(); // Use the message timestamp instead of the current date/time

  // Append elements to messageList
  divCardBody.appendChild(h5);
  divCardBody.appendChild(p);
  divCardBody.appendChild(small); // Add the date to the card body
  div.appendChild(divCardBody);
  messageList.appendChild(div);
}
function saveMessage1(name, email, message){
  var newMessageRef = messagesRef1.push();
  newMessageRef.set({
    name: name,
    email:email,
    message: message,
    timestamp: Date.now() // Save the current timestamp along with the message
  });
}

  // Initialize Firebase for subscription
  const footerFirebaseConfig = {
    apiKey: "AIzaSyCrkr6MbF2Cx9ds0rJzH5ptbWvytTvu9Go",
    authDomain: "footer-section.firebaseapp.com",
    databaseURL: "https://footer-section-default-rtdb.firebaseio.com",
    projectId: "footer-section",
    storageBucket: "footer-section.appspot.com",
    messagingSenderId: "898490602457",
    appId: "1:898490602457:web:aee95228476d3b15d37fc8"
};

const footerFirebaseApp = firebase.initializeApp(footerFirebaseConfig, "footer");
const subscriptionRef = footerFirebaseApp.database().ref("subscription");

document.getElementById("contactForm2").addEventListener("submit", submitSubscriptionForm);

function submitSubscriptionForm(e) {
    e.preventDefault();

    const emailid = getInputVal("emailid");

    if (emailid.trim() === "") {
        alert("Please enter a valid email address.");
        return;
    }

    saveSubscription(emailid);

    // reset the form
    document.getElementById("contactForm2").reset();
}

const saveSubscription = (emailid) => {
    const newSubscriptionRef = subscriptionRef.push();

    newSubscriptionRef.set({
        emailid: emailid,
    }).then(() => {
        // enable alert
        document.querySelector(".alert").style.display = "block";

        // remove the alert
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 5000);
    });
};

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}


// copy code function
function copyCode(button) {
  const codeElement = button.previousElementSibling.querySelector("code");
  const code = codeElement.innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "Code copied!";
    setTimeout(() => {
      button.innerText = "Copy code";
    }, 2000);
  });
}
