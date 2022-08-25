let elForm = document.querySelector("#questionForm");
let elName = document.querySelector("#name");
let elAge = document.querySelector("#age");
let elQuestion = document.querySelector("#question");
let elOutput = document.querySelector("#output");

function printData(event) {
  event.preventDefault();

  let name = elName.value;
  let age = elAge.value;
  let question = elQuestion.value;

  localStorage.setItem("question", question);
  elOutput.textContent =
    "Your name: " + name + " Age: " + age + " Your question: " + question;
  elOutput.style.visibility = "visible";
  document.querySelector("#sentQuestion").textContent =
    localStorage.getItem("question");
}

function checkQuestion(minLength) {
  let name = elName.value;

  if (name.length < minLength) {
    name.textContent =
      "Your name must be " + minLength + " characters or mmore";
  }
}
elName.addEventListener("blur", checkQuestion(5));
elForm.addEventListener("submit", printData);
