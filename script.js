document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const summary = document.getElementById("summary").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  const resumeHTML = `
    <h3>${fullName}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Summary:</strong> ${summary}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Experience:</strong> ${experience}</p>
  `;

  document.getElementById("resumeOutput").innerHTML = resumeHTML;
});

function findJobs() {
  const query = document.getElementById("jobQuery").value;
  displayJobResults(query);
}

function selectJob(value) {
  displayJobResults(value);
}

function displayJobResults(query) {
  const jobs = {
    "Software Developer": "Join top tech companies building innovative software.",
    "Graphic Designer": "Design for web, print, and digital campaigns.",
    "Data Analyst": "Work with big data and generate insightful reports.",
    "Customer Support": "Help users and solve their issues with empathy.",
    "Digital Marketing Specialist": "Create and manage online marketing strategies."
  };

  const result = jobs[query] || "No results found. Try another skill or job title.";
  document.getElementById("jobResults").innerHTML = `<p><strong>${query}:</strong> ${result}</p>`;
}

let currentSlide = 0;

function autoSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + 1) % totalSlides;

  document.querySelector('.auto-carousel').style.transform =
    `translateX(-${currentSlide * 100}%)`;
}

setInterval(autoSlide, 3000); // Slides every 3 seconds

// ✅ Correct function: NO <script> tag here
function showAllTemplates() {
  const grid = document.getElementById("allTemplates");
  grid.style.display = grid.style.display === "none" ? "flex" : "none";
}
