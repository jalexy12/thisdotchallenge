import axios from 'axios';

 /*
  Github rate limit API returns a MS time stamp
  rounded to 10 digits instead of 13, making it harder to calculate
  when the actual reset is
*/
function padTimeWithZeros(timestamp) {
  const stringForm = String(timestamp);

  if (stringForm.length < 13) {
    const zeroes = "0".repeat(13 - stringForm.length);

    return Number(stringForm + zeroes);
  }

  return timestamp
}

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

  async rateLimit() {
    try {
      const { data } = await axios.get('https://api.github.com/rate_limit');
      const { core, search } = data.resources;

      return {
        core: {
          ...core,
          isLimited: core.remaining + 4 <  core.limit,
          actualReset: new Date(padTimeWithZeros(core.reset))
        },
        search: {
          ...search,
          isLimited: search.remaining < search.limit,
          actualReset: new Date(padTimeWithZeros(search.reset))
        }
      }
    } catch (err) {
      throw new Error('Error fetching rate limit data');
    }
  }
}

export default new ApiQuery();;
