const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})




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

    if (!validateEmail(emailid)) {
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

// Function to validate email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLowerCase());
}
