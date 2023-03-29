const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
//-------------------quiz App-------------------------
const quizData = [
    {
        question: "What is the difference between a list and a tuple in Python?",
        a: "Lists are mutable while tuples are immutable",
        b: "Tuples are mutable while lists are immutable",
        c: "Both lists and tuples are immutable",
        d: "Both lists and tuples are mutable",
        correct: "a",
    },
    {
        question: "Which statement is used to exit a loop in Python?",
        a: "continue",
        b: "break",
        c: "pass",
        d: "exit",
        correct: "b",
    },
    {
        question: "What is the output of the following code?x = 10 y = 5 print(x % y)",
        a: "2",
        b: "0",
        c: "1",
        d: "5",
        correct: "a",
    },
    {
        question: "What is the correct syntax to create a function in Python?",
        a: "def function_name():",
        b: "function_name def():",
        c: "function_name():",
        d: "def function_name:",
        correct: "a",
    },
    {
        question: "What is the difference between '==' and 'is' operators in Python?",
        a: " '==' compares the values of two objects, while 'is' compares their identities",
        b: " 'is' compares the values of two objects, while '==' compares their identities",
        c: " '==' and 'is' are interchangeable",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is Python?",
        a: "A programming language",
        b: "A snake",
        c: "A type of food",
        d: "A type of music",
        correct: "a",
        },
        {
        question: "Which of the following is NOT a data type in Python?",
        a: "Boolean",
        b: "Float",
        c: "Decimal",
        d: "Char",
        correct: "d",
        },
        {
        question: "What is the output of the following code? print(2 + 3 * 4)",
        a: "20",
        b: "14",
        c: "18",
        d: "9",
        correct: "b",
        },
        {
        question: "Which of the following is used for commenting in Python?",
        a: "#",
        b: "//",
        c: "/* */",
        d: "<!-- -->",
        correct: "a",
        },
        {
        question: "What is the output of the following code? x = 5 \n print('x = ' + x)",
        a: "x = 5",
        b: "x = x",
        c: "5",
        d: "Error",
        correct: "d",
        },
        {
            question: "Which of the following is a Python web framework?",
            a: "Django",
            b: "Ruby on Rails",
            c: "Express.js",
            d: "Flask",
            correct: "a",
          },
          {
            question: "What is the output of the following code? \n print(9//2)",
            a: "4.5",
            b: "4",
            c: "5",
            d: "None of the above",
            correct: "b",
          },
          {
            question: "What is the output of the following code? \n x = [1,2,3,4] \n print(x[1:3])",
            a: "[1,2,3]",
            b: "[2,3,4]",
            c: "[1,2]",
            d: "[2,3]",
            correct: "d",
          },
          {
            question: "What is the keyword used for defining a function in Python?",
            a: "func",
            b: "define",
            c: "def",
            d: "function",
            correct: "c",
          },
          {
            question: "What is the output of the following code? \n x = 5 \n print(x > 3 and x < 10)",
            a: "True",
            b: "False",
            c: "None of the above",
            d: "Error",
            correct: "a",
          },
          {
            question: "What is the output of the following code? \n x = [1,2,3,4] \n x.append(5) \n print(x)",
            a: "[1,2,3,4]",
            b: "[1,2,3,4,5]",
            c: "[2,3,4,5]",
            d: "[1,2,3,5]",
            correct: "b",
          },
          {
            question: "What is the output of the following code? \n x = 'hello' \n print(x.capitalize())",
            a: "Hello",
            b: "hello",
            c: "hELLO",
            d: "Error",
            correct: "a",
          },
          {
            question: "Which of the following is not a Python data type?",
            a: "Integer",
            b: "Boolean",
            c: "Float",
            d: "String Array",
            correct: "d",
          },
          {
            question: "What is the output of the following code? \n x = [1,2,3,4] \n x.pop(2) \n print(x)",
            a: "[1,2,4]",
            b: "[1,2,3,4]",
            c: "[1,3,4]",
            d: "[2,3,4]",
            correct: "a",
          },
          {
            question: "What is the output of the following code? \n x = [1,2,3,4] \n print(len(x))",
            a: "1",
            b: "2",
            c: "3",
            d: "4",
            correct: "d",
          },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const reloadBtn = document.getElementById('reload');

let currentQuiz = 0;
let score = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledQuizData = shuffle(quizData);

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = shuffledQuizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === shuffledQuizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < shuffledQuizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${shuffledQuizData.length} questions correctly</h2>

                <button id="reload" onclick="location.reload()">Try Again!</button>
            `;
      reloadBtn.addEventListener('click', () => {
        currentQuiz = 0;
        score = 0;
        shuffledQuizData = shuffle(quizData);
        loadQuiz();
      });
    }
  }
});





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
