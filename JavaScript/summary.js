// const jsBall = document.querySelectorAll('.js-ball');
// const body = document.querySelector('body');

// for (i = 0; i < 5; i++) {
//   const xball = document.createElement('div');

//   xball.classList.add('small-ball');
//   const randomLeft = Math.random() * (window.innerWidth - element.clientWidth);
//   const randomTop = Math.random() * (window.innerHeight - element.clientHeight);

//   xball.style.left = randomLeft + 'px';
//   xball.style.top = randomTop + 'px';

//   body.appendChild(xball);
// }

const grayscaleColors = [
  '#000000',
  '#1a1a1a',
  '#333333',
  '#4d4d4d',
  '#666666',
  '#808080',
  '#999999',
  '#b3b3b3',
  '#cccccc',
  '#e5e5e5',
  '#1a1a1a',
  '#333333',
  '#4d4d4d',
  '#666666',
  '#808080',
  '#999999',
  '#b3b3b3',
  '#cccccc',
  '#e5e5e5',
  '#1a1a1a',
  '#333333',
  '#4d4d4d',
  '#666666',
  '#808080',
  '#999999',
  '#b3b3b3',
  '#cccccc',
  '#e5e5e5',
  '#1a1a1a',
  '#333333',
  '#4d4d4d',
  '#666666',
  '#808080',
  '#999999',
  '#b3b3b3',
  '#cccccc',
  '#e5e5e5',
];

const body = document.querySelector('body');
const html = document.documentElement;

for (let i = 0; i < 80; i++) {
  const xball = document.createElement('div');
  xball.classList.add('small-ball');

  const randomLeftPercentage = Math.random() * 95;
  //   const randomTopPercentage = Math.random() * 100;

  xball.style.left = randomLeftPercentage + '%';

  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const randomOffset = Math.random() * height;
  xball.style.top = randomOffset + 'px';

  //   xball.style.top = randomTopPercentage + '%';

  xball.style.animationDelay = Math.random() * 30 + 's';

  const size = 30 + Math.random() * (150 - 30);
  xball.style.height = size + 'px';
  xball.style.width = size + 'px';

  const randomIndex = Math.floor(Math.random() * grayscaleColors.length);

  // Get the random color from the array
  const randomColor = grayscaleColors[randomIndex];

  xball.style.backgroundColor = randomColor;

  body.appendChild(xball);
}

//   const existingElements = [];

//   for (let i = 0; i < 600; i++) {
//     const xball = document.createElement('div');
//     xball.classList.add('small-ball');

//     // ... (same as before)

//     // Calculate a safe position for the new element
//     let safePositionFound = false;
//     while (!safePositionFound) {
//       const randomLeftPercentage = Math.random() * 100;
//       xball.style.left = randomLeftPercentage + '%';

//       const height = Math.max(
//         body.scrollHeight,
//         body.offsetHeight,
//         html.clientHeight,
//         html.scrollHeight,
//         html.offsetHeight
//       );

//       const randomOffset = Math.random() * height;
//       xball.style.top = randomOffset + 'px';

//       const newElementRect = xball.getBoundingClientRect();
//       let overlapping = false;

//       for (const existingElement of existingElements) {
//         const existingRect = existingElement.getBoundingClientRect();
//         if (
//           newElementRect.left < existingRect.right &&
//           newElementRect.right > existingRect.left &&
//           newElementRect.top < existingRect.bottom &&
//           newElementRect.bottom > existingRect.top
//         ) {
//           overlapping = true;
//           break;
//         }
//       }

//       if (!overlapping) {
//         safePositionFound = true;
//         existingElements.push(xball);
//       }
//     }

//     // ... (rest of the code remains the same)
//   }
