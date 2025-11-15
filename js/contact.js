document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);
    const action = form.getAttribute("action");

    fetch(action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        status.classList.add("show");
        status.innerText = "Message sent successfully!";
        form.reset();

        // hide after 3 seconds
        setTimeout(() => {
          status.classList.remove("show");
        }, 3000);
      } else {
        response.json().then(data => {
          if (data.errors) {
            status.classList.add("show");
            status.innerText = data.errors.map(e => e.message).join(", ");
            setTimeout(() => { status.classList.remove("show"); }, 4000);
          }
        });
      }
    })
    .catch(error => {
      status.classList.add("show");
      status.innerText = "Submission failed. Try again!";
      setTimeout(() => { status.classList.remove("show"); }, 4000);
      console.error(error);
    });
  });
});
