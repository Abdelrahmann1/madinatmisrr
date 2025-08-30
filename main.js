// Premium Real Estate Landing Page JavaScript

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
        preloader.classList.add('hidden');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});


async function handleSubmit(e, sheet) {
    e.preventDefault();
    const form = e.target; // The form element
    const name = form.name.value.trim(); // Assuming your input has name="name"
    const phone = form.phone.value.trim(); // Assuming your input has name="phone"
    if (form.project) {
        const project = form.project.value.trim(); // Assuming your input has name="phone"
        if (project != "none") {
            sheet = project;
        }else{
            console.log("none");
            
        }
    }else{
        console.log("all");
        
    }
    // // Validate inputs
    if (!name || !phone) {
      showAlert("الرجاء إدخال الاسم ورقم الهاتف.", "warning");
      return;
    }
  
    console.log(name, phone,sheet);
    
    // // Show progress bar
    // const progressContainer = document.getElementById("progressContainer");
    // progressContainer.classList.remove("d-none");
  
    // Send to your PHP backend
    // try {
    //   const response = await fetch('./submit-sheet.php', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: new URLSearchParams({
    //       name: name,
    //       phone: phone,
    //       compound: sheet
    //     })
    //   });
  
    //   const result = await response.json();
  
    //   if (result.success) {
    //     name.value = "";
    //     phone.value = "";
    //     showAlert("شكراً لك! تم إرسال بياناتك بنجاح.", "success");
    //     setTimeout(() => {
    //       window.location.href = 'thank_you.html';
    //     }, 1000);
    //   } else {
    //     throw new Error(result.error || "Submission failed");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   showAlert("حدث خطأ، برجاء المحاولة مرة أخرى.", "danger");
    // } finally {
    //   progressContainer.classList.add("d-none");
    // }
  }