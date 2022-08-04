const form = document.querySelector('form');
const colorScheme = document.querySelector('select');
const colorCodes = document.querySelector('.color-names');
const colorBar = [...document.querySelectorAll('.color-bar')];
const baseURL = 'https://www.thecolorapi.com/scheme';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(colorBar);
});

fetch('https://www.thecolorapi.com/scheme?hex=ffd70d')
  .then((res) => res.json())
  .then((data) => {
    data.colors.map((color, key) => {
      colorBar[key].style.backgroundColor = color.hex.value;
      colorCodes.innerHTML += `
      <p class="color-1">${color.hex.value}</p>
      `;
    });
  });
