import axios from 'axios';

class ApiQuery {
  constructor(baseUrl = 'https://api.github.com/search') {
    this.baseUrl  = baseUrl;
    this.resource = 'users';
    this.query    = '';
  }

  search(query) {
    if (!query || typeof query !== 'string') {
      throw new Error('Invalid query provided');
    }

    return axios.get(`${this.baseUrl}/${this.resource}?q=${query}`)
  }
}

export default ApiQuery;
