function changeTheme() {
    document.body.classList.toggle("dark-theme");
  
    // Save preference
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  
  // Load saved preference
  window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
    }
  
    // Toggle navbar in mobile
    const toggler = document.querySelector('.navbar-toggler');
    if (toggler) {
      toggler.addEventListener('click', () => {
        document.querySelector('.navbar-menu').classList.toggle('active');
      });
    }
  
    // Dropdown functionality
    const dropdownTogglers = document.querySelectorAll('.dropdown-toggler');
    dropdownTogglers.forEach(toggler => {
      toggler.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownId = toggler.getAttribute('data-dropdown');
        document.getElementById(dropdownId).classList.toggle('show');
      });
      function changeTheme() {
        document.body.classList.toggle("dark-theme");
      
        if (document.body.classList.contains("dark-theme")) {
          localStorage.setItem("theme", "dark");
        } else {
          localStorage.setItem("theme", "light");
        }
      }
      
      window.onload = () => {
        if (localStorage.getItem("theme") === "dark") {
          document.body.classList.add("dark-theme");
        }
      };
      
    });
  };
  function openModal() {
    document.getElementById('infoModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
  }
  
  // Optional: close modal by clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
      closeModal();
    }
  };
  
  