document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newBook = document.createElement('p');
  newBook.textContent = 'New Book';
  newBook.classList.add('new-book');
  document.querySelector('ul').appendChild(newBook);

  const newAuthor = document.createElement('p');
  newAuthor.textContent = 'New Author';
  newAuthor.classList.add('new-author');
  document.querySelector('ul').appendChild(newAuthor);

  const newCategory = document.createElement('p');
  newCategory.textContent = 'New Category';
  newCategory.classList.add('new-category');
  document.querySelector('ul').appendChild(newCategory);


const handleForm = function() {
  event.preventDefault();
  const resultParagraph = document.querySelector('.new-book');
  resultParagraph.textContent = `${event.target.title.value}`;
}

const handleForm2 = function() {
  event.preventDefault();
  const resultParagraph = document.querySelector('.new-author');
  resultParagraph.textContent = `${event.target.author.value}`;
}

const handleForm3 = function() {
  event.preventDefault();
  const resultParagraph = document.querySelector('.new-category');
  resultParagraph.textContent = `${event.target.category.value}`;
}

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleForm);

const form2 = document.querySelector('#new-item-form');
form.addEventListener('submit', handleForm2);

const form3 = document.querySelector('#new-item-form');
form.addEventListener('submit', handleForm3);

});

// event.preventDefault();
//   const resultParagraph2 = document.querySelector('.new-author');
//   resultParagraph.textContent = `${event.target.author.value}`;