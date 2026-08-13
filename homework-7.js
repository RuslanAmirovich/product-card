// Задание 3: Функция для вывода температуры
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather("Москва", 20); 


// Задание 4: Проверка скорости света
// Скорость света в вакууме составляет примерно 299792458 м/с (или ~300000 км/с)
const SPEED_Of_LIGHT = 299792458; 

function checkSpeed(speed) {
  if (speed > SPEED_Of_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_Of_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000); 


// Задание 5: Симуляция покупки товара
const productName = "Игровая приставка";
const productPrice = 500;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const missingAmount = productPrice - budget;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс`);
  }
}

buyProduct(450); 


// Задания 6 и 7: Своя функция и 3 переменные
const userName = "Руслан";
let userAge = 39;
const isStudent = true;

function greetUser(name, age) {
  console.log(`Привет, ${name}! Тебе уже ${age} лет.`);
}

greetUser(userName, userAge);
