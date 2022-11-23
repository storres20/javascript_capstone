// GET comments from the API
const getComment = async (id, url) => {
  const response = await fetch(`${url}?item_id=${id}`);

  // when "item_id" doesn't exist or ZERO comments
  if (!response.ok) {
    const message = 0;
    throw new Error(message);
  }

  // comments from API
  const data = await response.json();

  return data;
};

export default getComment;