// Hero button action
function showMessage() {
  alert("Thank you for your interest! We'll contact you shortly.");
}

// Form submission handler
function submitForm(event) {
  event.preventDefault(); // Stop default form submission

  // Get form values
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Basic validation
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("Please fill in all fields before submitting.");
    highlightInvalidFields(name, email, message);
    return false;
  }

  // Clear any highlights
  [name, email, message].forEach((field) => {
    field.style.borderColor = "#ccc";
  });

  // Simulate successful submission
  alert(`Thanks, ${name.value}! We'll get back to you at ${email.value}.`);
  
  // Optionally clear form
  event.target.reset();

  return true;
}

// Highlight empty fields
function highlightInvalidFields(...fields) {
  fields.forEach((field) => {
    if (!field.value.trim()) {
      field.style.borderColor = "red";
    } else {
      field.style.borderColor = "#ccc";
    }
  });
}
