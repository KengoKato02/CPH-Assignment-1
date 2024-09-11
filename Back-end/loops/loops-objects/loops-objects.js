const books = [
 { title: 'Harry Potter: Deathly Hollow pt. 1', author: 'J.K. Rowling' },
 { title: 'Harry Potter: Deathly Hollow pt. 1', author: 'J.K. Rowling' },
 { title: 'The Stranger', author: 'Albert Camu' },
 { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
 { title: 'The Hobbit', author: 'J.R. Tolkein' }
];

const ul = document.getElementById('book-list');

function generateBookList(booksArray) {
 ul.innerHTML = ''; 
 booksArray.forEach(book => {
   const li = document.createElement('li');
   li.textContent = `${book.title} written by ${book.author}`;
   ul.appendChild(li);
 });
}

generateBookList(books);

// const shortenedBooks = books.slice(0, 3); 
// generateBookList(shortenedBooks);