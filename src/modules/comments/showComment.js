const showComment = async (id, url) => {
  const response = await fetch(`${url}?item_id=${id}`);
  const data = await response.json();

  if (data.error) {
    return 0;
  }

  return data;
};

export default showComment;