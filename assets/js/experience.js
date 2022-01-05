AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: "Associate Software Engineer",
        cardImage: "./assets/images/experience-page/opentext.png",
        place: "Hyderabad, India",
        time: "(Nov 2021 - Present)",
        desp: "<li>Developing plugins for OpenText content management system, used by top businesses around the world</li>",
    },
    {
        title: "Student Developer",
        cardImage: "./assets/images/experience-page/gsoc.png",
        place: "Google Summer Of Code",
        time: "(May - Sept, 2021)",
        desp: "<li>Front-end Development: Design and implement a seamless front-end for Biomedical Machine Learning Pipelines.</li><li>Back-end Connection: Improved and Refactored previous code to meet the requirements for communicating with front-end.</li><li>Python Web-Sockets: Implemented a Web-Sockets for low-latency real time exchange of workflows and thread updates reducing REST API calls up-to 80%.</li>",
    },
    {
        title: "Research Lead",
        cardImage: "./assets/images/experience-page/research.jpg",
        place: "Genoparadigm, Hyderabad, India",
        time: "(Jan - April, 2021)",
        desp: "<li>Project - An Ideal Application For Radiology: Created an impeccable and an evolutionary, robust architecture for processing, predicting and visualizing biomedical machine learning pipelines with an accuracy of 98%.</li><li>Mobile Application Development: Design and implement a seamless React-Native based mobile app, which connects and communicates users with radiology platform with an efficiency of above 75%.</li><li>Impact: Used by doctors at various hospitals which includes Tapadia Diagnostics, Hyderabad, India.</li>",
    },
];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
            (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
    {
        title: "Google Summer Of Code 2021",
        cardImage: "assets/images/experience-page/gsoc.png",
        description:
            "Implemented a Web-Sockets for low-latency real time exchange of workflows and thread updates reducing REST API calls up-to 80%.",
    },
];

const showCards = () => {
    let output = "";
    volunteershipcards.forEach(
        ({ title, cardImage, description }) =>
            (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
    {
        title: "The Python Week",
        subtitle: "Participant",
        image: "./assets/images/experience-page/python-week.png",
        desp: "Innovated an AI project with an accuracy of 98% and Deployed it as part of a hackathon titled ”The Python Week” which ranked this project among the top 5 out of a total of 66 projects (nationally - India).",
    },
    {
        title: "Developer Days",
        subtitle: "Mentor",
        image: "./assets/images/experience-page/dev-days.png",
        desp: "Communicated and mentored Developer Days community consisting of over 500+ developers.",
    },
];

const showCards3 = () => {
    let output = "";
    mentor.forEach(
        ({ title, image, subtitle, desp }) =>
            (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
    );
    hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
