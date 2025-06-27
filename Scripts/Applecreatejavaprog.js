// ✅ Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const statusDiv = document.getElementById("formStatus");
//All must work in order to sign up-->
  if (!name || !email || !dob || !password) {
    e.preventDefault();
    alert("Please fill in all fields.");
    return;
  }
//Email must contain @ in ORDER TO CONTINUE-->
  if (!email.includes("@")) {
    e.preventDefault();
    alert("Enter a valid email address.");
    return;
  }
//PASSWORD LENTH NO GREATER THAN 6 CH-->
  if (password.length < 6) {
    e.preventDefault();
    alert("Password must be at least 6 characters.");
    return;
  }

  // 🌀 Show Loading Feedback-->
  statusDiv.style.display = "block";
  statusDiv.innerText = "⏳ Signing you up...";
//If all done correctly-->
  setTimeout(() => {
    statusDiv.innerText = "✅ Signed up successfully!";
  }, 1500);
});

// 👁️ Show/Hide Password option -->
document.getElementById("togglePass").addEventListener("click", function (e) {
  e.preventDefault();
  const passInput = document.getElementById("password");
  if (passInput.type === "password") {
    passInput.type = "text";
    this.textContent = "Hide Password";
  } else {
    passInput.type = "password";
    this.textContent = "Show Password";
  }
});

// ✍️ Name Character Counter up to 30-->
const fullNameInput = document.getElementById("fullName");
const nameCounter = document.getElementById("nameCounter");

fullNameInput.addEventListener("input", () => {
  nameCounter.textContent = `${fullNameInput.value.length} / 30`;
});
