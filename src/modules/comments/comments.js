/* eslint-disable no-alert */
import NewComment from './newComment.js';
import addComment from './addComment.js';
import showComment from './showComment.js';

const url = 'https://api.tvmaze.com/shows';

const comments = async (number) => {
  const cardsContainer = document.querySelector('.cards-container');
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < number; i += 1) {
        cardsContainer.innerHTML += `
        <div class="modal fade" id="exampleModal${data[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="${data[i].image.medium}" alt="Sample photo" class="card-image" />
                <h4 class="modal-title mb-2" id="exampleModalLabel">${data[i].name}</h4>
                
                <div class="modal-info">
                  <p>Runtime: ${data[i].runtime} min</p>
                  <p>Schedule: ${data[i].schedule.time} h</p>
                  <p>Rating: ${data[i].rating.average}</p>
                  <p>Country: ${data[i].network.country.name}</p>
                </div>
                
                <div id="titleComment${data[i].id}" class="mb-2">Title Comments</div>
                <div id="comment${data[i].id}" class="mb-4"></div>
                
                <form class="formFlex mb-4">
                  <input type="text" id="fname${data[i].id}" name="${data[i].id}" placeholder="Your name" autocomplete="off" required>
                  <textarea id="ta${data[i].id}" name="ta${data[i].id}" rows="4" cols="50" placeholder="Your insights" required></textarea>
                  <button type="button" class="btn btn-primary btnAddComment">Comment</button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
        `;
      }
    });

  cardsContainer.addEventListener('click', (e) => {
    // Comment's URL
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1PzqD6Qshuxs8IJlxxL7/comments';

    // Clicking on COMMENTS BUTTON from main page
    if (e.target.classList.contains('btnComment')) {
      // ID object
      const id = e.target.name;
      // Show Comments when just show modal
      showComment(id, url);
    }

    // Clicking on COMMENT BUTTON from modal page
    if (e.target.classList.contains('btnAddComment')) {
      if (
        e.target.parentElement[0].value !== '' && e.target.parentElement[1].value
      ) {
        // Your name
        const username = e.target.parentElement[0].value;
        // Your insights
        const comment = e.target.parentElement[1].value;
        // ID object
        const id = e.target.parentElement[0].name;

        const newComment = new NewComment(username, comment, id);

        // Add comment in API
        addComment(newComment, url, id);

        // Clear inputs
        e.target.parentElement[0].value = '';
        e.target.parentElement[1].value = '';
      } else {
        alert('Insert a comment');
      }
    }
  });
};

export default comments;
