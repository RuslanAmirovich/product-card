import { socialComments } from './comments.js';

// ==========================================
// Задание 2: Фильтрация массива чисел
// ==========================================

// Создаем исходный массив чисел от 1 до 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Метод .filter() оставляет только те элементы, которые подходят под условие (>= 5)
const filteredNumbers = numbers.filter(num => num >= 5);

console.log(filteredNumbers); 
// Выведет: [5, 6, 7, 8, 9, 10]


// ==========================================
// Задание 3: Проверка наличия сущности в массиве строк
// ==========================================

// Создаем массив кухонных приборов
const kitchenAppliances = ["Миксер", "Блендер", "Тостер", "Чайник", "Мультиварка"];

// Искомый прибор
const searchAppliance = "Тостер";

// Метод .includes() проверяет, есть ли элемент в массиве, и возвращает true или false
const hasAppliance = kitchenAppliances.includes(searchAppliance);

console.log(`Задание 3. Есть ли "${searchAppliance}" в списке?`, hasAppliance);
// Выведет: true


// ==========================================
// Задание 4: Функция разворота массива (чистая функция)
// ==========================================

/**
 * Функция принимает массив и возвращает его перевернутую копию.
 * Мы используем spread (...) перед вызовом .reverse(), так как метод 
 * .reverse() мутирует (изменяет) исходный массив. Копирование защищает оригинал.
 */
function reverseArray(arrayToReverse) {
  return [...arrayToReverse].reverse();
}

// Переворачиваем массив чисел из Задания 2 (filteredNumbers)
const reversedNumbers = reverseArray(filteredNumbers);

// Переворачиваем массив приборов из Задания 3 (kitchenAppliances)
const reversedAppliances = reverseArray(kitchenAppliances);

console.log("Задание 4. Перевернутые числа:", reversedNumbers);
// Выведет: [10, 9, 8, 7, 6, 5]

console.log("Задание 4. Перевернутые приборы:", reversedAppliances);
// Выведет: ["Мультиварка", "Чайник", "Тостер", "Блендер", "Миксер"]


// ==========================================
// Задание 7: Фильтрация комментариев, почта которых содержит ".com"
// ==========================================
const comEmailComments = socialComments.filter(comment => comment.email.includes(".com"));

console.log("Задание 7 (.com почты):", comEmailComments);


// ==========================================
// Задание 8: Изменение postId в зависимости от id (через .map)
// ==========================================
const updatedPostIdComments = socialComments.map(comment => {
  return {
    ...comment,
    // Если id <= 5, ставим postId: 2, иначе ставим 1
    postId: comment.id <= 5 ? 2 : 1
  };
});

console.log("Задание 8 (Обновленный postId):", updatedPostIdComments);


// ==========================================
// Задание 9: Объекты, состоящие только из id и name
// ==========================================
const shortComments = socialComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log("Задание 9 (Только id и name):", shortComments);


// ==========================================
// Задание 10: Проверка длины текста body на валидность (> 180 символов)
// ==========================================
const validatedComments = socialComments.map(comment => {
  return {
    ...comment,
    // Условие: если длина body больше 180, то true, иначе false
    isInvalid: comment.body.length > 180
  };
});

console.log("Задание 10 (Свойство isInvalid):", validatedComments);


// ==========================================
// Задание 11: Сбор массива почт через .map() и .reduce()
// ==========================================

// Способ 1: Через метод .map()
// Он просто берет из каждого объекта свойство email и кладёт в новый массив
const emailsWithMap = socialComments.map(comment => comment.email);

console.log("Задание 11 (Массив почт через map):", emailsWithMap);


// Способ 2: Через метод .reduce()
// acc (аккумулятор) — это наш собираемый массив, на старте он равен [] (указан в конце)
const emailsWithReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email); // Добавляем текущую почту в массив-аккумулятор
  return acc;              // Обязательно возвращаем аккумулятор для следующего шага
}, []); // <-- Это начальное значение аккумулятора

console.log("Задание 11 (Массив почт через reduce):", emailsWithReduce);

// Краткая справка по reduce:Метод .reduce() используется, когда вам нужно пройтись по массиву и на его основе собрать одно единственное значение (это может быть число, строка, объект или, как в нашем случае, новый массив).Он принимает колбэк-функцию и начальное значение (аккумулятор).В нашем примере начальным значением будет пустой массив [], в который мы на каждом шаге будем добавлять (.push()) почту пользователя.

// ==========================================
// Задание 12: Приведение массива почт к строке
// ==========================================

// Вариант 1: Использование метода .toString()
const emailsStringSimple = emailsWithMap.toString();

console.log("Задание 12 (.toString()):");
console.log(emailsStringSimple); 
// Выведет: Eliseo@gardner.biz,Jayne_Kuhic@sydney.com,Nikita@garfield.biz...


// Вариант 2: Использование метода .join() с красивым разделителем
// Разделим почты символом " | " для красивого вывода
const emailsStringFormatted = emailsWithMap.join(" | ");

console.log("Задание 12 (.join() с разделителем):");
console.log(emailsStringFormatted);
// Выведет: Eliseo@gardner.biz | Jayne_Kuhic@sydney.com | Nikita@garfield.biz...