const form = document.querySelector("#keep-in-touch-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form data
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const phoneCountryCode = form.elements["phone-country-code"].value;
  const phoneNumber = form.elements["phone-number"].value;
  const howWeMet = form.elements["how-we-met"].value;
  const agreeToShare = form.elements["agree-to-share"].checked;

  // Validation
  if (!email || !phoneCountryCode || !phoneNumber || !agreeToShare) {
    alert("Please fill in all the fields and agree to share your information with us.");
    return;
  }

  // Send data to backend
  const data = {
    name,
    email,
    phone: `${phoneCountryCode}-${phoneNumber}`,
    howWeMet,
  };

  // Send data using Fetch API
  fetch("your-backend-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you for subscribing!");
        form.reset();
      } else {
        alert("There was an error submitting the form. Please try again later.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("There was an error submitting the form. Please try again later.");
    });
});

/*
Make sure to replace "your-backend-url" with the URL of your backend where you want to 
send the data. This code sets up an event listener for the form's submit event, validates the 
form data, sends the data to the backend using the Fetch API, and displays success or error 
messages accordingly.
*/