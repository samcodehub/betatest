// ------------nav btn--------------------
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
// ------------nav btn--------------------
//-------------side bar--------------------
function sidebar(){
  var sidb=document.getElementById("sb");
  var btn=document.getElementById("BTN");
  var btnn=document.getElementById("BTNn");
  var btns=document.getElementById("BTNs");
  var btne=document.getElementById("BTNe");
      sidb.style.left="0";
      btn.style.display="none";
      btnn.style.display="block";
      btns.style.display="none";
      btne.style.display="block";
}
function sidebarr(){
  var sidb=document.getElementById("sb");
  var btn=document.getElementById("BTN");
  var btnn=document.getElementById("BTNn");
  var btns=document.getElementById("BTNs");
  var btne=document.getElementById("BTNe");
      sidb.style.left="-250px";
      btn.style.display="block";
      btnn.style.display="none";
      btns.style.display="block";
      btne.style.display="none";
}
//##################################################################################
// Define the cards array before using it
const cards = document.querySelectorAll('.card');
function getRandomColor(){
  const colors = ['khaki','Lavender','aquamarine','lightgrey','peachpuff','navajowhite','pink','wheat','lightblue','thistle']
  let color = ''
  for (let i = 0; i < colors.length; i++){
    color = colors[Math.floor(Math.random() * colors.length)];
  }
  return color;
}
cards.forEach(card => {
  card.style.backgroundColor = getRandomColor();
});
// Define the cards array before using it

// ------------------search input function---------------
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const boxess = document.getElementsByClassName("card");

// Add event listener for "click" event on the search button
searchButton.addEventListener("click", function() {
    const searchValue = searchInput.value.toLowerCase();
    let wordFound = false;
    for (let i = 0; i < boxess.length; i++) {
        const boxText = boxess[i].textContent.toLowerCase();
        if (boxText.includes(searchValue)) {
            boxess[i].style.display = "";
            wordFound = true;
        } else {
            boxess[i].style.display = "none";
        }
    }
    if (!wordFound) {
        alert("Word not found");
    } else if (searchValue === '') {
        location.reload();
    } else {
        const searchResult = document.getElementById("searchResult");
        if (searchResult) {
            const yOffset = searchResult.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }
});

// Add event listener for "keypress" event on the search input field
searchInput.addEventListener("input", function(event) {
    const searchValue = searchInput.value.toLowerCase();
    if (searchValue === '') {
        location.reload();
    }
});

searchInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButton.click();
    }
});
// -----------------------search input ends here-------------

//##################################################################################
// -------------hide scroll down guide----------------
const timeline = document.querySelector('#timeline');
const elementToHide = document.querySelector('#element-to-hide');

const timelineDistance = timeline.offsetTop - window.innerHeight;

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= timelineDistance) {
    elementToHide.style.opacity = '0';
    elementToHide.style.transition = 'opacity 1s ease-in-out';
  } else {
    elementToHide.style.opacity = '1';
    elementToHide.style.transition = 'opacity 1s ease-in-out';
  }
});

// -------------hide scroll down guide----------------


//##################################################################################
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
//##################################################################################

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    } else {
      entry.target.style.animationPlayState = 'paused';
    }
  });
}, {
  rootMargin: '-50px',
  threshold: 0.5
});

cards.forEach(card => {
  observer.observe(card);
});



