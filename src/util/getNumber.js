// results return is inclusive of min, max variable argument
// The floor ensures we include of the min in the range
// The +1 on max ensures we include max in the range

function getNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export default getNumber;
