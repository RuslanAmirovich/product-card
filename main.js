// Покраска всех карточек в один цвет
const productCards = document.querySelectorAll('.product-list__product-item');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards-button');

console.log('Product Cards', productCards);
console.log('Button', changeColorAllCardsButton);

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach(card => {
    card.style.backgroundColor = 'lightblue';
  });
});

// Покраска первой карточки в другой цвет
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');
changeColorFirstCardButton.addEventListener('click', () => {
  if (productCards.length > 0) {
    productCards[0].style.backgroundColor = 'lightgreen';
  }
}); 

// Открыть страницу Google.com
const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', () => {
  openGoogle();
});

function openGoogle() {
  const answer = confirm('Вы хотите открыть страницу Google.com?');
  if (answer === true) {
    window.open('https://www.google.com', '_blank');
  } else {
    return;
  }
}

// Вывести сообщение в консоль
const outputConsoleLogButton = document.querySelector('#output-console-log');
outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('ДЗ № 6'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// при наведении на главный заголовок ("Выбери свой продукт") - он выводится в консоль. 
// (контент элемента, а не произвольный текст, написанный от руки)
const mainTitle = document.querySelector('.catalog__title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

//Добавили кнопку, при нажатии на которую мы будем менять её цвет с одного на другой. 
// При повторном нажатии цвет меняется с второго на первый.
const toggleButton = document.querySelector('#toggle-button');
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});