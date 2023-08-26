function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= 200 && rect.bottom >= 200;
}

document.addEventListener("scroll", (event) => {
  if (isInViewport(document.getElementById("homePage"))) {
    document.getElementById("homePageLink").classList.add("active");
  } else {
    document.getElementById("homePageLink").classList.remove("active");
  }
  if (isInViewport(document.getElementById("aboutMePage"))) {
    document.getElementById("aboutMePageLink").classList.add("active");
  } else {
    document.getElementById("aboutMePageLink").classList.remove("active");
  }
  if (isInViewport(document.getElementById("skillsPage"))) {
    document.getElementById("skillsPageLink").classList.add("active");
  } else {
    document.getElementById("skillsPageLink").classList.remove("active");
  }
  if (isInViewport(document.getElementById("projectsPage"))) {
    document.getElementById("projectsPageLink").classList.add("active");
  } else {
    document.getElementById("projectsPageLink").classList.remove("active");
  }
  if (isInViewport(document.getElementById("connectPage"))) {
    document.getElementById("connectPageLink").classList.add("active");
  } else {
    document.getElementById("connectPageLink").classList.remove("active");
  }
});
