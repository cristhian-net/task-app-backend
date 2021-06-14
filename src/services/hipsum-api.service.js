const axios = require('axios').default;

const getParagraph = async () => {
  const response = await axios.get(`https://hipsum.co/api/?type=hipster-centric&sentences=1&t=${new Date().getTime()}`);
  console.log(response.data[0]);
  return response.data[0];
};

module.exports = {
  getParagraph,
};
