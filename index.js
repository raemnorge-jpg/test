/* function login() {
    const first = document.getElementById("firstName").value.trim();
    const last = document.getElementById("lastName").value.trim();
    const welcome = document.getElementById("welcome");
    const message = document.getElementById("message");

    if (first === "Raem" && last === "Hussain") {
        welcome.style.display = "block";   // Show the welcome line
        message.textContent = "Welcome Raem Hussain!";          // Clear error
    } else {
        welcome.style.display = "none";    // Hide welcome if wrong
        message.style.color = "red";
        message.textContent = "Incorrect name. Try again.";
    }
} */

       // Attach event listener after DOM loads
    (function() {
      const btn = document.getElementById('submitBtn');
      const firstEl = document.getElementById('firstName');
      const lastEl = document.getElementById('lastName');
      const welcome = document.getElementById('welcome');
      const message = document.getElementById('message');


      
      if (!btn || !firstEl || !lastEl || !welcome || !message) {
        console.error('One or more elements not found. Check element IDs.');
      }

      btn.addEventListener('click', function() {
        const first = firstEl.value.trim();
        const last = lastEl.value.trim();
        console.log('Clicked submit — first:', JSON.stringify(first), 'last:', JSON.stringify(last));

        // Exact match required
        if (first === "Raem" && last === "Hussain") {
        alert("Welcome Raem Hussain!");
        } else {
        alert("Incorrect name. Try again.");
        }
      });

      // Optional: press Enter in last name to submit
      lastEl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') btn.click();
      });
    })();
  