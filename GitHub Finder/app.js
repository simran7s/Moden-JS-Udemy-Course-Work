// Init Github
const github = new GitHub();
// Init UI
const ui = new UI();
// Search input
const searchUser = document.getElementById('searchUser');


// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Text
    const userText = e.target.value;

    if (userText !== "") {
        //Make http call
        github.getUser(userText)
            .then((data) => {
                if (data.profile.message === "Not Found") {
                    // Show Alert(error)
                    // Done using ui.js
                    ui.showAlert('Error: User Not Found', 'alert alert-danger');
                } else {
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // If userText is empty
        // Clear Profile
        ui.clearProfile();
    }
})