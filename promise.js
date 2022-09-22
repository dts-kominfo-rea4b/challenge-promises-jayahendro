const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (value) => {
  let count = 0
  let value1, value2
  value1 = await promiseTheaterIXX()
  value2 = await promiseTheaterVGC()

  const data = [...value1, ...value2]

  data.map((result) => {
    if (result.hasil === value) {
      count++
    }
  })

  return count
};

module.exports = {
  promiseOutput,
};
