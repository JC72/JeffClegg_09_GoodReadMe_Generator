// axios external module
const axios = require('axios');

const githublink = {
  async getUser(userResponses) {
    try { let response = await axios
        
              .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = githublink;