// local reviews data

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate architecto ea, impedit quia animi asperiores.',
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: './images/portfolio2.jpeg',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate architecto ea, impedit quia animi asperiores.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: './images/portfolio3.WebP',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate architecto ea, impedit quia animi asperiores.',
  },
  {
    id: 4,
    name: 'sara jones',
    job: 'ux developer',
    img: './images/portfolio4.jpeg',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate architecto ea, impedit quia animi asperiores.',
  },
];

const firstImage = reviews[0].img;
console.log(firstImage);
let currentItem = 0;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const img = document.querySelector('#person-img');
const randomBtn = document.querySelector('.random-btn');

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
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

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
  let currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});
