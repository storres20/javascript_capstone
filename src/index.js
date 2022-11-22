import './style.css';
import './imgs/bg1.png';

const displaySeries = async (number) => {
  await fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < number; i += 1) {
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.innerHTML += `<div class="card">
            <img src="${data[i].image.medium}" alt="Sample photo" class="card-image" />
             <div class="series-title">${data[i].name}</div>
            <div class="heart">❤️</div>
            <div class="likes">5 likes</div>
            <div class="button-container">
                <button name=${data[i].id} class="comments-button">Comments</button>
            </div>
        </div>`;
      }
    });
};

displaySeries(15);
