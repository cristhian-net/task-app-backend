const getParagraph = async () => {
  const quotes = ['Hello World!', 'Hello Sea!', 'Hello Sky!', 'Hello Earth!', 'Hello Truenorth!', 'Hello NodeJS!'];

  const randomNum = Math.floor((Math.random() * quotes.length));

  return quotes[randomNum];
};

module.exports = {
  getParagraph,
};
