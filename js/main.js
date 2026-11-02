   const toggle = document.getElementById("theme-toggle");
   const root = document.documentElement;

   function applyTheme(theme) {
     root.setAttribute("data-theme", theme);
     toggle.textContent = theme === "dark" ? "☀️" : "🌙";
     localStorage.setItem("theme", theme);
   }

   applyTheme(localStorage.getItem("theme") || "light");

   toggle.addEventListener("click", () => {
     applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
   });