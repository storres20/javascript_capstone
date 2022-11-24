const itemsCounter = (cards) => {
  const seriesNumber = cards.length;
  const seriesMenu = document.querySelector('.series-menu');
  seriesMenu.innerHTML = `Series (${seriesNumber})`;
  return seriesNumber;
};

export default itemsCounter;
