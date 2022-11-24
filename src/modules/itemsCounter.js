const itemsCounter = (series) => {
  const seriesNumber = series.length;
  // console.log(seriesNumber);
  const seriesMenu = document.querySelector('.series-menu');
  seriesMenu.textContent = `Series (${seriesNumber})`;
};

export default itemsCounter;
