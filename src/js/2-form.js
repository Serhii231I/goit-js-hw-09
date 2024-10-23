const formKey = "feedback-form-state";
let formData =
   { email: "",

    message: ""
}

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input');
const textareaInput = document.querySelector('textarea');

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
    formData = JSON.parse(savedTextInStorage)
    emailInput.value = formData.email;
    textareaInput.value = formData.message;
}

uploadFromStorage();

form.addEventListener('submit', checkIfFill);

function checkIfFill(event) {
      event.preventDefault();
    if (formData.email === "" || formData.message === "") {
  console.log("Fill please all fields");
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
