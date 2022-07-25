// results return is inclusive of max variable argument

function getNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export default getNumber;
