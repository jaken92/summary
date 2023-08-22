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
const viewportWidth = document.documentElement.clientWidth;

for (let i = 0; i < 80; i++) {
  const size = 30 + Math.random() * 120;

  const offsetLeft = Math.random() * viewportWidth;

  if (offsetLeft + size <= viewportWidth) {
    const xball = document.createElement('div');
    xball.style.height = size + 'px';
    xball.style.width = size + 'px';
    xball.style.left = offsetLeft + 'px';
    xball.classList.add('small-ball');

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

    const randomIndex = Math.floor(Math.random() * grayscaleColors.length);

    const randomColor = grayscaleColors[randomIndex];

    xball.style.backgroundColor = randomColor;

    body.appendChild(xball);
  }
}
