window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click',()=> {
    
    document.documentElement.scrollTop = 0;
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById("hhhh");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-theme");
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle("dark-theme");
        toggleButton.innerHTML="Light Mode";

        // Save preference
        if (body.classList.contains("dark-theme")) {
            toggleButton.innerHTML="Light Mode";
            localStorage.setItem("darkMode", "enabled");
        } else {
            toggleButton.innerHTML="Dark Mode";
            localStorage.setItem("darkMode", "disabled");
        }
    });
});