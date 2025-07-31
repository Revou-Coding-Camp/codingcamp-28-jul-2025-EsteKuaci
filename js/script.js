// Greet user by name on homepage
window.addEventListener("DOMContentLoaded", () => {
  const namePrompt = prompt("Siapa nama Anda?");
  const greeting = document.getElementById("greeting");
  if (namePrompt && namePrompt.trim() !== "") {
    greeting.textContent = `Hi ${namePrompt}, Welcome to Our Website`;
  }
});

function validateForm() {
  const name = document.getElementById("inputName").value.trim();
  const birthDate = document.getElementById("inputDate").value;
  const genderRadios = document.getElementsByName("gender");
  const message = document.getElementById("inputMessage").value.trim();
  let gender = "";

  for (const radio of genderRadios) {
    if (radio.checked) {
      gender = radio.value;
      break;
    }
  }

  if (!name || !birthDate || !gender || !message) {
    alert("Semua data harus diisi.");
    return false;
  }

  const currentTime = new Date().toString();

  const output = `
    <div style="border:1px solid #ccc;padding:1rem;margin-top:1rem;">
      <p><strong>Current time:</strong> ${currentTime}</p>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${birthDate}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    </div>
  `;

  document.getElementById("formOutput").innerHTML = output;
  document.getElementById("contactForm").reset();
  return false;
}
