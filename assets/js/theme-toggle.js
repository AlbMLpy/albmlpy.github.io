document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  function updateTheme() {
    if (body.classList.contains("dark-mode")) {
      themeIcon.className = "fas fa-moon"; // Moon icon in dark mode
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.className = "fas fa-sun"; // Sun icon in light mode
      localStorage.setItem("theme", "light");
    }
  }

  // ✅ Set LIGHT MODE as the default when there's no saved preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeIcon.className = "fas fa-moon"; // Show moon icon
  } else {
    body.classList.remove("dark-mode"); // Ensure light mode is default
    themeIcon.className = "fas fa-sun"; // Show sun icon
    localStorage.setItem("theme", "light"); // Ensure light mode is saved
  }

  // Toggle theme and icon on button click
  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    updateTheme();
  });
});
  
