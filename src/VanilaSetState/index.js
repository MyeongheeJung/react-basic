let firstName = "Jane";
let lastName = "Jacobs";
let isEditing = false;

const handleFormSubmit = (e) => {
  e.preventDefault();
  setIsEditing(!isEditing);
};

const handleFirstNameChange = (e) => {
  setFirstName(e.target.value);
};

const handleLastNameChange = (e) => {
  setLastName(e.target.value);
};

const setFirstName = (value) => {
  firstName = value;
  updateDom();
};

const setLastName = (value) => {
  isEditing = value;
  updateDom();
};

const setIsEditing = (value) => {
  isEditing = value;
  updateDom();
};

const updateDom = () => {
  if (isEditing) {
    editButton.innerText = "Save Profile";
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.innerText = "Edit Profile";
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
  firstNameText.innerText = firstName;
  lastNameText.innerText = lastName;
  helloText.innerText = "Hello " + firstName + " " + lastName + "!";
};

const hide = (el) => (el.style.display = "none");
const show = (el) => (el.style.display = "");

let form = document.getElementById("form");
let editButton = document.getElementById("editButton");
let firstNameInput = document.getElementById("firstNameInput");
let firstNameText = document.getElementById("firstNameText");
let lastNameInput = document.getElementById("lastNameInput");
let lastNameText = document.getElementById("lastNameText");
let helloText = document.getElementById("helloText");
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
