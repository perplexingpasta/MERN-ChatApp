// export function extractTime(dateString) {
//   const date = new Date(dateString);
//   const hours = padZero(date.getHours());
//   const minutes = padZero(date.getMinutes());
//   return `${hours}:${minutes}`;
// }

// // helper function to pad single digit numbers with a leading zero
// function padZero(number) {
//   return number.toString().padStart(2, "0");
// }


export function extractDateTime(dateString) {
  const date = new Date(dateString);
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); // Months are zero-based, so we add 1
  const year = date.getFullYear() - 2000;
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${hours}:${minutes}, ${day}/${month}/${year}`;
}

// helper function to pad single digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
