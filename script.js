
// Frontend-only registration handler (no backend).
// Saves registrations to localStorage and redirects to book.html.

const form = document.getElementById('registerForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const mobileNo = document.getElementById('mobile').value.trim();

  // Frontend validation
  if (!fullName) { alert("Full name is required."); return; }
  if (!age || age <= 0) { alert("Valid age is required."); return; }
  if (!mobileNo) { alert("Mobile number is required."); return; }

  // Prepare user object
  const user = { fullName, age, mobileNo, registeredAt: new Date().toISOString() };

  // Save to localStorage (simulate backend persistence)
  try {
    let users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    users.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    // Also save last registered user for quick access
    localStorage.setItem('userData', JSON.stringify(user));

    alert("🎉 Registration successful! (Saved locally in your browser)");
    window.location.href = "book.html";
  } catch (err) {
    console.error("Error saving to localStorage:", err);
    alert("⚠️ Could not save registration locally. Make sure your browser allows localStorage.");
  }
});
