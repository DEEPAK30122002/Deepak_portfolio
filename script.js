function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const templateParams = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    message: document.getElementById("form-message").value,
    reply_to: document.getElementById("email").value,
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
