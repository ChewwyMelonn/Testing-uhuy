// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

// toggle clas active search form

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// email sending
  (function(){
    emailjs.init("pPHcW3S2r9Pf3DN7E"); // Your Public Key
  })();

  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('status');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    statusMsg.innerHTML = "Sending...";

    const templateParams = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    emailjs.send('service_neznmkb', 'template_2sipfin', templateParams)
      .then(function(response) {
        statusMsg.innerHTML = '<span class="success">Message sent successfully!</span>';
        form.reset();
      }, function(error) {
        statusMsg.innerHTML = '<span class="error">Failed to send message. Please try again later.</span>';
        console.error('Error:', error);
      });
  });

   // Toggle daftar anggota
  document.querySelectorAll('.toggle-members').forEach(btn => {
    btn.addEventListener('click', () => {
      const list = btn.nextElementSibling;
      list.classList.toggle('active');
      btn.classList.toggle('active');
    });
  });

  // misi visi
    function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 100;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();