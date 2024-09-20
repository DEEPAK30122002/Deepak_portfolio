function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("form-message").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const templateParams = {
    user_name: name,
    user_email: email,
    message: message,
    reply_to: email,
  };

  // Use EmailJS to send the email
  emailjs.send("service_x8m2del", "template_bxtesx3", templateParams).then(
    function (response) {
      alert("Email sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("contact-form").reset(); // Reset the form
    },
    function (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email, please try again later.");
    }
  );
}
