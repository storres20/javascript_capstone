import './style.css';
import './imgs/bg1.png';
import { fetchLikes, postLike } from './modules/likes.js';
import comments from './modules/comments/comments.js';
import itemsCounter from './modules/itemsCounter.js';

const displaySeries = async (number) => {
  await fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < number; i += 1) {
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.innerHTML += `<div class="card">
            <img src="${data[i].image.medium}" alt="Sample photo" class="card-image" />
            <div class="series-title">${data[i].name}</div>
            <div class="heart" id="like-${data[i].id}">♥</div>
            <div class="likes" id=${data[i].id}>0 likes</div>
            <div class="button-container">
                <button type="button" name=${data[i].id} class="btn btn-secondary btnComment" data-bs-toggle="modal" data-bs-target="#exampleModal${data[i].id}">Comments</button>
            </div>
        </div>
        `;
      }
      itemsCounter(data);
    });
};

let hearts = [];

const setLikes = async () => {
  const likeDiv = document.querySelectorAll('.likes');
  const likes = await fetchLikes();
  for (let i = 0; i < likeDiv.length; i += 1) {
    // const id = likeDiv[i].id;
    const { id } = likeDiv[i];
    for (let j = 0; j < likes.length; j += 1) {
      if (likes[j].item_id === id) {
        likeDiv[i].innerText = `${likes[j].likes} likes`;
      }
    }
  }
};

const setUpPage = async () => {
  await displaySeries(15);
  hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      const string = e.target.id;
      const id = string.split('-')[1];
      postLike(id).then(() => {
        setLikes();
      });
    });
  });
  setLikes();
};

// setUpPage();

// Add comments
comments(15);

setUpPage();
