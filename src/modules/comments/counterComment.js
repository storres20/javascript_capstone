const counterComment = (id) => {
  // ID object
  const modalComments = document.querySelectorAll(`#comment${id} p`);
  const countElement = modalComments.length;
  return countElement;
};

export default counterComment;