document.addEventListener("DOMContentLoaded", function () {
  const navList = document.getElementById("navbar__list");
  const sections = document.querySelectorAll("section");

  for (let i = 0; i < sections.length; i++) {
    const currentSection = sections[i]; 
    const sectionName = currentSection.getAttribute("data-nav"); 
    const sectionId = currentSection.id; 

    const link = document.createElement("a");
    link.textContent = sectionName; 
    link.href = `#${sectionId}`; 

    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
      });
    });

    const li = document.createElement("li");
    li.appendChild(link);
    navList.appendChild(li);
  }
});
