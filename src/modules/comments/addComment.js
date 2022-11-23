import showComment from './showComment.js';

// POST comment to API
const addComment = async (newComment, url, id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  // Show Comments after adding a new one on modal screen
  showComment(id, url);
};

export default addComment;