import axios from 'axios';

class ApiQuery {
  constructor(baseUrl = 'https://api.github.com/search') {
    this.baseUrl  = baseUrl;
    this.resource = 'users';
    this.query    = '';
  }

  formulateQuery(query, page = 1, perPage = 100) {
    if (!query || typeof query !== 'string') {
      throw new Error('Invalid query provided');
    }

    let baseQuery = `${this.baseUrl}/${this.resource}?q=${query}`;

    if (perPage) { baseQuery = baseQuery + `&per_page=${perPage}`; }
    if (page)    { baseQuery = baseQuery + `&page=${page}`; }

    return baseQuery;
  }

  formulateUserDetailsQuery(user) {
    return [
      `https://api.github.com/users/${user.login}/followers`,
      `https://api.github.com/users/${user.login}/following`,
      `https://api.github.com/users/${user.login}/repos`,
      `https://api.github.com/users/${user.login}/starred`
    ].map(queryLink => axios.get(queryLink))
  }

  search(formulatedQuery) {
    return axios.get(formulatedQuery);
  }

  searchMany(formulatedQuery) {
    return Promise.all(formulatedQuery);
  }
}

export default new ApiQuery();;