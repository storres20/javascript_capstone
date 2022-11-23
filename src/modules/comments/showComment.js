import getComment from './getComment.js';

// Render comments on modal screen
const showComment = (id, url) => {
  const comments = document.getElementById(`comment${id}`);

  getComment(id, url)
    .then((data) => {
      // If this "item_id" have comments
      comments.innerHTML = `<h4 class="text-center">Comments (${data.length})</h4>`;
      data.forEach((item) => {
        comments.innerHTML += `
        <p>${item.creation_date} ${item.username}: ${item.comment}</p>
      `;
      });
    })
    .catch((error) => {
      // If this "item_id" doesn't exist or don't have comments
      comments.innerHTML = `<h4 class="text-center">Comments (${error.message})</h4>`;
    });
};

export default showComment;