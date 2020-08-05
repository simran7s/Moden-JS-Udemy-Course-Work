class GitHub {
    constructor() {
        this.client_id = '9b9002ea38d5dfacd833';
        this.client_secret = 'd0ac27cb32dfe467b1062c496c4de5427f3b7447';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // await this so we can fetch response(json format)
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // await this so we can convert from json to array
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        // Then once all that is done, we do this
        // We are returing an object of profile containing array of profile elements
        return {
            profile,
            repos
        }
    }
}