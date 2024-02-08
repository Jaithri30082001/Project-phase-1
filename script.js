const aboutSection = document.querySelector(".about-custom");

const options = {
  root: null, // use the viewport as the root
  rootMargin: "0px",
  threshold: 0.2, // trigger animation when 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutSection.classList.add("in-view");
      // Unsubscribe from further notifications
      observer.unobserve(aboutSection);
    }
  });
}, options);

observer.observe(aboutSection);
