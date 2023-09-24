const shareIcon = document.getElementById("shareIcon");
const socialIcons = document.getElementById("socialIcons");

shareIcon.addEventListener("click", function () {
  if (socialIcons.style.display === "block") {
    socialIcons.style.display = "none";
  } else {
    socialIcons.style.display = "block";
  }
});

// Close the tooltip when clicking outside of it
document.addEventListener("click", function (event) {
  if (
    !shareIcon.contains(event.target) &&
    !socialIcons.contains(event.target)
  ) {
    socialIcons.style.display = "none";
  }
});
