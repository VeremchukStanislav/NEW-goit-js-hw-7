// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('ul#ingredients');

const makeList = array => {
  return array.map((el) => {
    const liRef = document.createElement('li');
    liRef.textContent = el;
    return liRef
  })
}

ingredientsList.append(...makeList(ingredients))