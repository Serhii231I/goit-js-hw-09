const formKey = "feedback-form-state";
let formData =
   { email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input[name="email"]');
const textareaInput = document.querySelector('textarea[name="message"]');

form.addEventListener('input',handleInput);
function handleInput(event) {
    const { name, value } = event.target;
    formData[name] = value;
saveToStorage();
}

function saveToStorage() {
    localStorage.setItem(formKey, JSON.stringify(formData));
}

function uploadFromStorage() {
    const savedTextInStorage = localStorage.getItem(formKey);
    if (savedTextInStorage) {
        formData = JSON.parse(savedTextInStorage)
        emailInput.value = formData.email;
        textareaInput.value = formData.message;
    }
}

uploadFromStorage();

form.addEventListener('submit', checkIfFill);

function checkIfFill(event) {
      event.preventDefault();
    if (formData.email === "" || formData.message === "") {
  alert("Fill please all fields");
  }
    else {
    console.log(formData);
    localStorage.removeItem(formKey);
    formData =
   { email: "",
    message: ""
}
    emailInput.value = "";
    textareaInput.value = "";
   } 
}
