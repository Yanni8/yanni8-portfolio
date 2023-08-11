
function get(url: string) {
    return fetch(url, { method: 'GET' }).then(data => Promise.resolve(data.json()));
}

export default {

    getStats() {
        return get('https://api.github.com/users/yanni8');
    },
    getPrivateRepos() {
        return get('https://api.github.com/users/yanni8/repos');
    },
    getOrgs(){
        return get('https://api.github.com/users/Yanni8/orgs');
    }

}