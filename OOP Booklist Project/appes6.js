class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // create tr element
        const row = document.createElement('tr');

        // Insert Cols
        row.innerHTML = `
        <td> ${ book.title}</td >
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        // Append Row as child of List
        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;

        // Add Text
        div.appendChild(document.createTextNode(message));

        // Get a Parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        // Insert div before form inside of container
        container.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);

    }



    deleteBook(target) {
        const ui = new UI();
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
            // Show Alert
            ui.showAlert("Book Removed!", "success")
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function (book) {
            const ui = new UI();
            ui.addBookToList(book);
        })
    }

    static addBook(book) {
        // Get books from LS
        const books = Store.getBooks();

        // Add the new Book
        books.push(book);

        // Store new books array into LS
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        // Get books from LS
        const books = Store.getBooks();

        //  remove from books
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        // Store new books array into LS
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Loaded Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener for add Book
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        // Get Form Values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

        // Instantiate Book
        const book = new Book(title, author, isbn);

        // Instaitate UI
        const ui = new UI();

        // Validate
        if (title === '' || author === "" || isbn === '') {
            // Error Alert
            ui.showAlert('Please Fill in all fields', 'error');
        } else {
            // Add Book to list
            ui.addBookToList(book);

            // Add to LS
            Store.addBook(book);

            // Show Success Alert
            ui.showAlert("Booked added!", "success");
            // clear fields
            ui.clearFields();
        }
        e.preventDefault();
    });


// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    // Instaite UI
    const ui = new UI();

    ui.deleteBook(e.target)

    // Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    e.preventDefault
});

