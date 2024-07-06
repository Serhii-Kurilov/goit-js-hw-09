const formData = {
  email: "",
  message: ""
};

const localStorageKey = "goit-example-message";
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function updateLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  updateLocalStorage();
});

function checkLocalStorage() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
    }
};

checkLocalStorage();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});