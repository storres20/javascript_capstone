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
                <h5 class="modal-title" id="exampleModalLabel">${data[i].name}</h5>
                
                <p>Runtime: ${data[i].runtime} min</p>
                <p>Schedule: ${data[i].schedule.time} h</p>
                <p>Rating: ${data[i].rating.average}</p>
                <p>Country: ${data[i].network.country.name}</p>
                
                <h5>Add a comment</h5>
                <form>
                  <input type="text" id="fname${data[i].id}" name="${data[i].id}" placeholder="Your name" autocomplete="off" required>
                  <textarea id="ta${data[i].id}" name="ta${data[i].id}" rows="4" cols="50" placeholder="Your insights" required></textarea>
                  <button type="button" class="btn btn-primary btnAddComment">Comment</button>
                </form>
                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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

    if (e.target.classList.contains('btnComment')) {
      // ID object
      const id = e.target.name;
      console.log(id);
      showComment(id, url);
    }

    if (e.target.classList.contains('btnAddComment')) {
      if (e.target.parentElement[0].value !== '' && e.target.parentElement[1].value) {
        // Your name
        const username = e.target.parentElement[0].value;
        // Your insights
        const comment = e.target.parentElement[1].value;
        // ID object
        const id = e.target.parentElement[0].name;

        const newComment = new NewComment(username, comment, id);

        // Add comment in API
        addComment(newComment, url);

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