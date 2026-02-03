let text =
  "I began my journey as an Electronics and Computer Engineering student, drawn to how systems function beneath the surface. But it was when I started building small websites in college that I found my real spark — the thrill of creating something people could see, use, and instantly connect with. What began as simple web pages soon grew into dynamic applications powered by AI, Machine Learning, and Computer Vision. Over time, I discovered a deep appreciation for the blend of clean interfaces, smart automation, and meaningful user experiences. Today, I’m driven by the belief that modern web development isn’t just about building pages — it’s about crafting intelligent, interactive systems that solve real problems and make technology feel effortless for users.";

let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}

// ✅ DO THIS INSTEAD OF window.onload =
window.addEventListener("load", function () {
  typeText();
});

function selectNav(id) {
  console.log("hover in", id);
  document.getElementById(id).classList.add("active");
}

function removeNav(id) {
  console.log("hover out", id);
  document.getElementById(id).classList.remove("active");
}

function showMore(internship) {
  let contentDiv = document.getElementById(internship + "Content");

  if (internship === "infotact") {
    contentDiv.innerHTML = `
          <h5 class="text-danger">AIML Intern – Infotact Solutions</h5>
          <p><strong>Duration:</strong> March 2025 – June 2025</p>

          <h6>Key Responsibilities</h6>
          <ul>
            <li>Applied ML classification algorithms to business datasets</li>
            <li>Performed data preprocessing and feature engineering</li>
            <li>Evaluated models using accuracy and confusion matrix</li>
            <li>Integrated ML models with Flask-based web applications</li>
          </ul>

          <h6>Tools & Technologies</h6>
          <p>Python, Pandas, NumPy, Scikit-learn, Flask</p>

          <button class="btn btn-outline-secondary mt-2"
            onclick="showLess('infotact')">
            Show Less
          </button>
        `;
  } else if (internship === "bzen") {
    contentDiv.innerHTML = `
          <h5 class="text-info">Web Application Developer – BZen Tech Solutions</h5>
          <p><strong>Duration:</strong> June 2025 – July 2025</p>

          <ul>
            <li>Worked on a production ML pipeline for structured data</li>
            <li>Deployed trained ML models using Flask</li>
            <li>Handled backend logic for real-time classification</li>
          </ul>

          <p><strong>Technologies:</strong> Python, Flask, HTML, CSS, JS</p>

          <button class="btn btn-outline-secondary mt-2"
            onclick="showLess('bzen')">
            Show Less
          </button>
        `;
  } else if (internship === "atharvo") {
    contentDiv.innerHTML = `
          <h5 class="text-danger">ML Intern – Atharvo</h5>
          <p><strong>Duration:</strong> June 2024 – July 2024</p>

          <ul>
            <li>Cleaned and transformed datasets</li>
            <li>Built Decision Tree and Random Forest models</li>
            <li>Evaluated models using accuracy, AUC, confusion matrix</li>
          </ul>

          <button class="btn btn-outline-secondary mt-2"
            onclick="showLess('atharvo')">
            Show Less
          </button>
        `;
  } else if (internship === "cotmac") {
    contentDiv.innerHTML = `
          <h5 class="text-success">Development & Automation – Cotmac Electronics</h5>
          <p><strong>Duration:</strong> Dec 2024 – Jan 2025</p>

          <ul>
            <li>Worked with TIA Portal and SIMATIC Manager</li>
            <li>Developed PLC panels (MCC, VFD)</li>
            <li>Configured SCADA systems for monitoring</li>
          </ul>

          <button class="btn btn-outline-secondary mt-2"
            onclick="showLess('cotmac')">
            Show Less
          </button>
        `;
  }
}

function showLess(internship) {
  let contentDiv = document.getElementById(internship + "Content");

  if (internship === "infotact") {
    contentDiv.innerHTML = `
          <i class="bi bi-robot mx-auto d-block text-danger p-1" style="font-size: 50px;"></i>
          <h5 class="mx-auto p-3">AIML INTERN</h5>
          <h6 class="text-align:text-right">Infotact Solution</h6>
          <h6 class="text-align:text-right">March-25 to June-25</h6>
                      <p tclass="text-justify">Applied classification algorithms on real-world datasets to solve business-specific problems. Integrated trained AI models with the web applications to enhance user interaction with the models.</p>
                      <button class="inter-buttons"onclick="showMore('infotact')">Know More</button>
        `;
  }
  if (internship === "bzen") {
    contentDiv.innerHTML = `
                      <i class="bi bi-laptop mx-auto d-block text-info p-1" style="font-size: 50px;"></i>
                      <h5 class="mx-auto p-3">WEB APPLICATION DEVELOPER</h5>
                      <h6 class="text-align:text-left">BZen Tech Solutions</h6>
                      <h6 class="text-align:text-right">June-25 to July-25</h6>
                      <p>Collaborated on a live production ML pipeline for structured data analysis and Deployed trained models on a 
                      Flask server for real-time classification tasks, data preprocessing, model training, and performance evaluation.</p>
                      <button class="inter-buttons" onclick="showMore('bzen')">Know More</button>
                    
        `;
  }
  if (internship === "atharvo") {
    contentDiv.innerHTML = `
          <i class="bi bi-collection mx-auto d-block text-danger p-1" style="font-size: 50px;"></i>  
                      <h5 class="mx-auto p-3">ML INTERN</h5>
                      <h6 class="text-align:text-left">Atharvo</h6>
                      <h6 class="text-align:text-right">June-24 to July-24</h6>
                      <p>Cleaned and transformed datasets for model ingestion. Built and tuned models (Decision Trees, Random Forests), and validated performance using confusion matrix.
                      accuracy, and AUC.</p>
                      <button class="inter-buttons" onclick="showMore('atharvo')">Know More</button>
        `;
  }
  if (internship === "cotmac") {
    contentDiv.innerHTML = `
          <i class="bi bi-cpu mx-auto d-block text-success p-1" style="font-size: 50px;"></i>
                      <h5 class="mx-auto p-3">DEVELOPMENT AND AUTOMATION</h5>
                      <h6 class="text-align:text-left">Cotmac Electronics</h6>
                      <h6 class="text-align:text-right">December-24 to January-25</h6>
                      <p>Hands-on experience in Industrial leading softwares TIA Portal and SIMATIC Manager for development and testing of PLC panels (including MCC,VFD) and SCADA systems for monitoring </p>
                      <button class="inter-buttons" onclick="showMore('cotmac')">Know More</button>
        `;
  }

  /* same idea for others 
      function addReview() {
      let reviewText = document.getElementById("reviewInput").value;

      if (reviewText.trim() === "") {
        alert("Please write a review");
        return;
      }

      let reviewList = document.getElementById("reviewList");

      reviewList.innerHTML +=
        '<div class="card review-card shadow-sm">' +
          '<div class="card-body">' +
            '<p>' + reviewText + '</p>' +
            '<small class="text-muted">User Review</small>' +
          '</div>' +
        '</div>';


      document.getElementById("reviewInput").value = "";
    }

    (function () {
      emailjs.init("aFv6e43fhtffOrQh6");
    })();*/
}

// Load reviews when page reloads
// Load reviews when page reloads
document.addEventListener("DOMContentLoaded", loadReviews);

function addReview() {
  const reviewInput = document.getElementById("reviewInput");
  const reviewText = reviewInput.value.trim();

  if (reviewText === "") {
    return;
  }

  // Review object (professional structure)
  const review = {
    text: reviewText,
    time: new Date().toLocaleString(),
  };

  // Get existing reviews or empty array
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Add new review
  reviews.push(review);

  // Save back to localStorage
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // Display on UI
  displayReview(review);

  // Clear textarea
  reviewInput.value = "";
}

function displayReview(review) {
  const reviewList = document.getElementById("reviewList");

  const reviewCard = document.createElement("div");
  reviewCard.className = "review-card mb-3 p-3 border";

  reviewCard.style.borderRadius = "2px 10px 10px 10px";

  reviewCard.innerHTML = `
      <p class="mb-1">${review.text}</p>
      <small class="text-muted">Posted on ${review.time}</small>
    `;

  reviewList.appendChild(reviewCard);
}

function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.forEach(displayReview);
}

const texts = [
  "I am a Web Application Developer",
  "I am an AI Developer",
  "I am a Machine Learning Enthusiast",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

window.onload = function () {
  setInterval(typeEffect, 100);
};

function typeEffect() {
  const element = document.getElementById("typingText");
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Typing
    element.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 800); // pause after typing
    }
  } else {
    // Deleting
    element.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
}

// Initialize EmailJS
(function () {
  emailjs.init("aFv6e43fhtffOrQh6"); // 🔴 YOUR PUBLIC KEY
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_fhessie", "template_s7t7ude", params)
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send message");
        console.error("EmailJS error:", error);
      });
  });
});
