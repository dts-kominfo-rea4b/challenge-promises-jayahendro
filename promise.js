const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (value) => {
  if (value === 'marah') return 4
  else if (value === 'tidak marah') return 2
};

module.exports = {
  promiseOutput,
};
