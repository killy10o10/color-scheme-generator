const form = document.querySelector('form');
const colorScheme = document.querySelector('select');
const colorCodes = document.querySelector('.color-names');
const colorBar = [...document.querySelectorAll('.color-bar')];
const baseURL = 'https://www.thecolorapi.com';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const colorPicker = document.getElementById('color-picker').value;
  const colorPickerCode = colorPicker.replace(/[^a-zA-Z0-9 ]/g, '');

  fetch(`${baseURL}/scheme?hex=${colorPickerCode}&mode=${colorScheme.value}`)
    .then((res) => res.json())
    .then((data) => {
      data.colors.map((color, key) => {
        colorBar[key].style.backgroundColor = color.hex.value;
        colorBar[key].textContent = color.name.value;
        colorCodes.innerHTML += `
      <small><p class="color-1">${color.hex.value}</p></small>
      `;
      });
    });

  colorCodes.innerHTML = '';
});
