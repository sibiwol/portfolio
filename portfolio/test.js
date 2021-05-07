let circle = document.querySelector("circle");
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

console.log(radius);
console.log(circumference);

console.log(circle.dataset.value);

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

setProgress(circle.dataset.value);

// const input = document.querySelector('input');
// setProgress(input.value);

// input.addEventListener('change', function(e) {
//   if (input.value < 101 && input.value > -1) {
//     setProgress(input.value);
//   }
// })
