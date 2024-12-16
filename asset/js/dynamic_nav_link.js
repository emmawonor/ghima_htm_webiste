
  document.addEventListener('DOMContentLoaded', function() {
    const setActiveLink = () => {
      const currentPath = window.location.pathname.replace(/\/$/, ""); // Normalize the current path
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

      navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/$/, ""); // Normalize the link path
        
        // Check if the current link matches the URL or is a sub-link in a dropdown
        if (linkPath === currentPath || (currentPath === "/" && linkPath === "/index.html")) {
          link.classList.add('active');

          // If this link is inside a dropdown, make the dropdown-toggle active too
          const dropdownToggle = link.closest('.dropdown').querySelector('.dropdown-toggle');
          if (dropdownToggle) {
            dropdownToggle.classList.add('active');
          }
        } else {
          link.classList.remove('active');

          // Also remove active class from dropdown-toggle if sub-link is not active
          const dropdownToggle = link.closest('.dropdown')?.querySelector('.dropdown-toggle');
          if (dropdownToggle) {
            dropdownToggle.classList.remove('active');
          }
        }
      });
    };

    // Run the function when the page loads
    setActiveLink();

    // Listen for changes in the URL
    window.addEventListener('popstate', setActiveLink);
  });

