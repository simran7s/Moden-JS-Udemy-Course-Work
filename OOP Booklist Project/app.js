
// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI COnstructor

function UI() { }

// Add book to list
UI.prototype.addBookToList = function (book) {
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
// Show Alert
UI.prototype.showAlert = function (message, className) {
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

};

// Delete Book
UI.prototype.deleteBook = function (target) {
    const ui = new UI();
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
        // Show Alert
        ui.showAlert("Book Removed!", "success")
    }
}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

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
    e.preventDefault
});


console.log(UI);