const itemsCounter = (cards) => {
  const seriesNumber = cards.length;
  console.log(seriesNumber);
  const seriesMenu = document.querySelector('.series-menu');
  seriesMenu.innerHTML = `Series (${seriesNumber})`;
  return seriesNumber;
};

export default itemsCounter;
