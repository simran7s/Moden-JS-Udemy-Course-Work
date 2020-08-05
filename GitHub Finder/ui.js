class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML =
            `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="Profile Pic" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="black" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_repos}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-primary">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: <a target="_blank" href="${user.blog}">${user.blog}</a></li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output +=
                `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                         </div>
                    </div>
                </div>
            `
            // Output Repos
            document.getElementById('repos').innerHTML = output;
        });
    }


    // Show Alert Message
    showAlert(message, className) {
        // Clear Remaining Alerts
        this.clearAlert();
        // Create Div
        const div = document.createElement('div');

        // Add Classes
        div.className = className;

        // Add Error Message
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector('.searchContainer');

        // Get Search Box
        const search = document.querySelector('.search');

        // Insert Alert
        // parent is container, inserted before the sibling search
        container.insertBefore(div, search);

        //Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    }

    // Clear Alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile on empty text
    clearProfile() {
        this.profile.innerHTML = '';
    }
}