class UI {
    constructor() {
        this.post = document.querySelector('.posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.formState = 'add';
    }
    // Show all posts
    showPosts(posts) {
        let output = '';

        posts.forEach(post => {
            output +=
                `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href=#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>    
                        </a>
                        <a href=#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>    
                        </a>
                    </div>
                </div>
                `;
        });
        this.post.innerHTML = output;
    }

    // Fill form to edit
    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState('edit');
    }

    // Change Form State
    changeFormState(type) {
        if (type === 'edit') {
            // Update current Post it buttons to be an update button
            this.postSubmit.textContent = 'Update Post'
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            // Create cancel button
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            // Get Parent and Sibling
            const parent = document.querySelector('.card-form');

            const sibling = document.querySelector('.form-end');

            parent.insertBefore(button, sibling);
        } else {
            // Change back to add state
            // Update text of button
            this.postSubmit.textContent = 'Post It'
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';

            // Remove cancel but if there
            if (document.querySelector('.post-cancel')) {
                // Remove cancel button
                document.querySelector('.post-cancel').remove();
                // Clear id from hidden field
                this.clearIdInput();
                // Also clear fields
                this.clearFields();
            }
        }
    }

    // Show alert
    showAlert(message, className) {
        this.clearAlert();

        // Create div
        const div = document.createElement('div');

        // Add Classes
        div.className = className;

        // Add Text
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector('.postsContainer');

        // Get Posts div
        const posts = document.querySelector('.posts');

        // Insert Alert div
        container.insertBefore(div, posts);

        // timeout
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear Alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearIdInput() {
        this.idInput.value = '';
    }

    // Clear Fields
    clearFields() {
        this.titleInput.value = "";
        this.bodyInput.value = "";
    }

}

export const ui = new UI();