export default function (label) {
  return `${label.toLowerCase().replaceAll(" ", "-")}-input`;
}
