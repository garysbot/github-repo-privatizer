const axios = require('axios');

const username = 'github_username_here';
const token = 'token_here';

const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json',
};

const makeRepoPrivate = async (repoName) => {
    const url = `https://api.github.com/repos/${username}/${repoName}`;
    try {
        await axios.patch(url, { private: true }, { headers });
        console.log(`Repository ${repoName} has been set to private.`);
    } catch (error) {
        console.error(`Failed to update repository ${repoName}: ${error.message}`);
    }
};

const privatizeRepos = async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
        const repos = response.data;
        for (const repo of repos) {
          if (repo.name.startsWith('WK') || repo.name.startsWith('wk')) {
            await makeRepoPrivate(repo.name);
          }
        }
    } catch (error) {
        console.error(`Failed to fetch repositories: ${error.message}`);
    }
};

privatizeRepos();
