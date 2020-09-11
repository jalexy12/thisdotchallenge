class BasicCache {
  constructor() {
    this.cache = {};
  }

  set(query, results) {
    this.cache[query] = {
      results,
      date: new Date(),
    }
  }

  get(query) {
    const cacheResult = this.cache[query];

    if (cacheResult && !this.isTooOldAndShouldRefetch(cacheResult)) {
      console.info("We did this already < 8 hours ago...using saved results");
      return cacheResult.results;
    }
  }

  isTooOldAndShouldRefetch(cacheResult) {
    const eightHoursInMS = (8 * (1000 * 60 * 60));
    const current = new Date();
    const { date: oldDate } = cacheResult;

    return ((current.valueOf() - oldDate.valueOf()) / 1000) > eightHoursInMS;
  }
}

export default new BasicCache();
