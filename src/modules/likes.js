const apiKey = '1PzqD6Qshuxs8IJlxxL7';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`;

const fetchLikes = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

const postLike = async (id) => {
  await fetch(apiUrl, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  })
    .then((response) => response)
    .then((data) => {
      console.log('Success', data);
    })
    .catch((error) => {
      console.error('Error', error);
    });
};

export { fetchLikes, postLike };
