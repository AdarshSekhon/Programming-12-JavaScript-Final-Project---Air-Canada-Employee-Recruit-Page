
document.body.style.backgroundImage = "linear-gradient(to bottom right, white, black, red)";


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

  links.classList.toggle("show-links");
});





let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");



// BUTTON #1 - Code for creation of DOM object for button through creation of variable called "decrease" and addition of 
// event listener that decrements the counter whenever the user clicks on it.
decrease.addEventListener("click", function () {
    count--;
    if (count > 0) {
        value.style.color = "white";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "black";
      }
      value.textContent = count;
});


// BUTTON #2 - Code for creation of DOM object for button through creation of variable called "reset" and addition of 
// event listener that resets the counter whenever the user clicks on it.
reset.addEventListener("click", function () {
    count = 0;
    if (count > 0) {
        value.style.color = "white";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "black";
      }
      value.textContent = count;
})


// BUTTON #3 - Code for creation of DOM object for button through creation of variable called "increase" and addition of 
// event listener that increments the counter whenever the user clicks on it.
increase.addEventListener("click", function () {
    count += 2;
    if (count > 0) {
        value.style.color = "white";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "black";
      }
      value.textContent = count;
});


btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count += 2;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "white";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});




// CRITERIA #3 PART 1 - Instance of a JavaScript array that stores the HEX value digits used to construct 
// random colours when user clicks on the colour flipper button.
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



const btn = document.getElementById("colourful");
const color = document.querySelector(".color");
const flipper = document.getElementById("flipper");

btn.addEventListener("click", function () {
  document.body.style.backgroundImage = "";
  let hexColor = "#";



  // CRITERIA #3 PART 2 - Instance of for loop to cycle through HEX digit array 6 times to fetch the needed digits 
  // to contruct a random colour when the user clicks the colour flipper button.
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }


  color.textContent = hexColor;
  
  document.body.style.backgroundColor = hexColor;
});



// BUTTON #4 - Code for creation of DOM object for button through creation of variable called "flipper"
// and addition of event listener that modifies the background-colour of the body when the user clicks on it.
flipper.addEventListener("click", function () {
  document.body.style.backgroundImage = "";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }


  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})



// CRITERIA #3 PART 3 - Instance of the random function used to select random digits from the HEX digits array to 
// construct a random colour when colour flipper button is clicked.
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}






const reviews = [
  {
    id: 1,
    name: 'Michael Rousseau',
    job: 'President and Chief Executive Officer',
    img: 'https://discoverorg-content.s3-us-west-1.amazonaws.com/P/png/e/2/c/3/e/e24ec8.png',
    text: "Passionate toward ensuring your flight experience is safe and comfortable!",
  },
  {
    id: 2,
    name: 'Craig Landry',
    job: 'Executive VP and Chief Operating Officer',
    img: 'https://news.paxeditions.com/storage/app/uploads/public/58a/1e4/1ba/thumb_48797_1200_1_0_0_auto.jpg',
    text: "Committed toward delivering excellent customer service and accounting to all our customers' needs.",
  },
  {
    id: 3,
    name: 'Marc Barbeau',
    job: 'Executive VP and Chief Legal Officer',
    img: 'https://www.aircanada.com/content/dam/aircanada/portal/images/biographies/thumbnail/marc-barbeau.jpg',
    text: 'Devoted toward maintaining the highest standards of aviation throughout every single flight.',
  },
  {
    id: 4,
    name: 'Charlene Hudy',
    job: 'Chair of Master Elected Council (MEC)',
    img: 'https://acpa.ca/getattachment/05df2b8d-d8d7-4349-a2cd-2a961a9642d9/Captain-Mike-McKay.aspx',
    text: 'Dedicated toward making your journey as memorable and pleasant as possible at Air Canada.',
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

const previous = document.getElementById('previous');
const next = document.getElementById('next');


let currentItem = 0;


window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});


function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});



// BUTTON #6 - Code for creation of DOM object for button through creation of variable called "next" 
// and addition of event listener that moves on to the next employee whenever the user clicks on it.
next.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
})


prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});



// BUTTON #5 - Code for creation of DOM object for button through creation of variable called 
// "previous" and addition of event listener that moves on to the previous employee when the user clicks on it.
previous.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
})


randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});






const btn2 = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const vidbtn = document.getElementById("vid")

btn2.addEventListener("click", function () {
  if (!btn2.classList.contains("slide")) {
    btn2.classList.add("slide");
    video.pause();
  } else {
    btn2.classList.remove("slide");
    video.play();
  }
});



// BUTTON #7 - code for creation of DOM object for button through creation of variable called "videobtn" and addition of 
// event listener that plays or pauses the video the user clicks on it.
vidbtn.addEventListener("click", function () {
  if (!btn2.classList.contains("slide")) {
    btn2.classList.add("slide");
    video.pause();
  } else {
    btn2.classList.remove("slide");
    video.play();
  }
});



const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});