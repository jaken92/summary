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

  const randomLeftPercentage = Math.random() * 100 - 3;
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

  xball.style.animationDelay = Math.random() * 30 + 's';

  const size = 30 + Math.random() * (150 - 30);
  xball.style.height = size + 'px';
  xball.style.width = size + 'px';

  const randomIndex = Math.floor(Math.random() * grayscaleColors.length);

  const randomColor = grayscaleColors[randomIndex];

  xball.style.backgroundColor = randomColor;

  body.appendChild(xball);
}
