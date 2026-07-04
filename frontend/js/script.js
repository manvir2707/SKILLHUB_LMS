let saved = localStorage.getItem("students");

if (saved) {

    students = JSON.parse(saved);

    displayStudents();

}

let students = [];

console.log("Welcome to SkillHub LMS");
let trainer = "Manish Rai";
console.log(trainer);

let course = "MERN";
let duration = 45;
let fees = 12000;
console.log(course);
console.log(duration);
console.log(fees);

// Data Types example



alert("Welcome to SkillHub LMS");

let heading = document.getElementById("hero-title");
heading.innerHTML = "Welcome to SkillHub LMS";

document.getElementById("joinBtn").innerHTML = "Enroll Today";
document.getElementById("joinBtn").style.backgroundColor = "green";

let btn = document.getElementById("joinBtn");
// Step 2: add the event listener
btn.addEventListener("click", function () {
  // ← Part 2: callback
  alert("Registration Starts soon!"); // ← Part 3: your code
});

let theme = document.getElementById("themeBtn");
theme.addEventListener("click", function () {
  document.body.style.background = "#dbeafe";
});

let themes = ["#dbeafe", "#dcfce7", "#fce7f3", "#fff"];
let t = 0;
{
    t = (t + 1) % themes.length;
  document.body.style.background = themes[t];
};

let total = 6; // starts at 6
document.getElementById("addCourse").addEventListener("click", function () {
  total++; // increment
  document.getElementById("count").innerHTML = total; // update DOM
});

let today = new Date();
document.getElementById("date").innerHTML = today.toDateString();

let userName = prompt("Enter your name:");

let banner = document.getElementById("welcomeBanner");

banner.innerHTML = `
    Hello, ${userName}! 👋 <br>
    <span>Welcome to SkillHub LMS</span>
`;
const greet = (name) => `Welcome ${name}`;

document.getElementById("studentName").textContent = "Rahul Sharma";

document.getElementById("todayDate").textContent = new Date().toDateString();

document.getElementById("themeBtn").onclick = function () {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");
};

function validateForm() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  if (name === "") {
    alert("Name is required");
    return; // stop here — don't continue
  }
  if (age < 18) {
    alert("You must be 18 or older");
    return;
  }
  alert("Registration successful, " + name);
}

// Get the form
let form = document.getElementById("registrationForm");

// Form Submit Event
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value;
  let mobile = document.getElementById("mobile").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let course = document.getElementById("course").value;
  let message = document.getElementById("message");

  // Name Validation
  if (name === "") {
    message.innerHTML = "Name is required.";
    message.style.color = "red";
    return;
}
    let student = {
    name,
    email,
    course
};

students.push(student);
saveData();
displayStudents();
updateStats();
  // Email Validation
  if (email === "") {
    message.innerHTML = "Email is required.";
    message.style.color = "red";
    return;
  }

  // Age Validation
  if (age < 18) {
    message.innerHTML = "You must be at least 18 years old.";
    message.style.color = "red";
    return;
  }

  // Mobile Validation
  if (mobile.length !== 10 || isNaN(mobile)) {
    message.innerHTML = "Mobile number must be exactly 10 digits.";
    message.style.color = "red";
    return;
  }

  // Password Length Validation
  if (password.length < 6) {
    message.innerHTML = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // Confirm Password Validation
  if (password !== confirmPassword) {
    message.innerHTML = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  // Course Validation
  if (course === "Select Course") {
    message.innerHTML = "Please select a course.";
    message.style.color = "red";
    return;
  }

  // Terms & Conditions Validation
  if (!document.getElementById("terms").checked) {
    message.innerHTML = "Please accept the Terms & Conditions.";
    message.style.color = "red";
    return;
  }

  // Success Message
  message.innerHTML =
    "<h4>Registration Successful!</h4>" +
    "Welcome <strong>" +
    name +
    "</strong><br>" +
    "Email: " +
    email +
    "<br>" +
    "Course: <strong>" +
    course +
    "</strong>";

  message.style.color = "green";
});

// Function Example
function CheckValidation(age) {
  if (age >= 18) {
    console.log("Registered!");
  } else {
    console.log("Not Eligible");
  }
}

registerStudent(12);

// Grade Example
let marks = 85;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}

// Login Example
let hasGoogle = false;
let hasEmail = true;

if (hasGoogle || hasEmail) {
  console.log("Login allowed");
}

let courses = [];
courses.push("HTML");
courses.push("CSS");
courses.push("JavaScript");
console.log(courses);

courses.splice(1, 1);
console.log(courses);
console.log(courses.length);

let student_1 = {
  name: "Rahul",
  email: "rahul@gmail.com",
  course: "MERN",
};
console.log(student_1);

students.forEach((student) => {
  console.log(student);
});

let frontend = ["HTML", "CSS"];
let backend = ["Node", "Express"];
let courses_1 = [...frontend, ...backend];

function totalStudents(...students) {
  console.log(students);
}
totalStudents("Rahul", "Priya", "Arjun");

let editIndex = -1;
// -1 = "not editing, adding new"
function editStudent(index) {
  editIndex = index;
  document.getElementById("name").value = students[index].name;
  document.getElementById("email").value = students[index].email;
  document.getElementById("course").value = students[index].course;
  document.getElementById("submitBtn").textContent = "Update Student";
}

function displayStudents(data=students) {
let tbody = document.getElementById("studentTableBody");
tbody.innerHTML = "";
data.forEach((s, index) => {
  tbody.innerHTML += `
<tr>
<td>
${s.name}
</td>
<td>
${s.course}
</td>
<td>
<button onclick="
editStudent
(
${index}
)">
Edit
</button>
<button onclick="
deleteStudent
(
${index}
)">
Delete
</button>
</td>
</tr>
`;
});
updateStats();
}

form.addEventListener("submit", registerStudent);
  let student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    course: document.getElementById("course").value,
  };
  if (editIndex == -1) {
    students.push(student);
    // CREATE
  } else {
    students[editIndex] = student;
    // UPDATE
    editIndex = -1;
  }
  saveData();
  // localStorage.setItem(...)
  displayStudents();
  document.getElementById("registrationForm").reset();


document.getElementById("searchBox").addEventListener("keyup", function () {
  let keyword = this.value.toLowerCase();
  let filtered = students.filter(function (s) {
    return s.name.toLowerCase().includes(keyword);
  });
  displayStudents(filtered);
});

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

function
updateStats
() {
document
.
getElementById
(
"totalCount"
).
textContent
=
students
.
length
;
document
.
getElementById
("mernCount").textContent=students.
filter
(
s
=>
s
.
course
===
"MERN Stack"
).
length
;
document
.
getElementById
(
"javaCount"
).
textContent
=
students
.
filter
(
s
=>
s
.
course
===
"Java"
).
length
;
document
.
getElementById
(
"pythonCount"
).
textContent
=
students
.
filter
(
s
=>
s
.
course
===
"Python"
).
length
;
}

function
deleteStudent
(
i
) {
if
(
confirm
(
"Delete this student?"
)) {
students
.
splice
(
i
,
1
);
saveData
();
displayStudents
();
}
}