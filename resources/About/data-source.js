const { DataSource } = require("apollo-datasource");
const { InMemoryLRUCache } = require("apollo-server-caching");

const pkg = require("../../package");

class AboutDataSource extends DataSource {
  constructor () {
    super()
  }

  initialize ({ context, cache } = {}) {
    this.context = context;
    this.cache = cache || new InMemoryLRUCache();
  }

  didEncounterError (error) {
    throw error;
  }

  cacheKey (id) {
    return `about-${id}`;
  }

  async get (id, { ttlInSeconds } = {}) {
    const cacheKey = this.cacheKey(id);
    const cacheDoc = await this.cache.get(cacheKey);
    if (cacheDoc) {
      return JSON.parse(cacheDoc);
    }

    const names = Object.keys(pkg.dependencies);

    const about = {
      ...pkg,
      dependencies: names.map((name) => ({
        name,
        version: pkg.dependencies[name]
      }))
    };

    if (ttlInSeconds) {
      this.cache.set(cacheKey, JSON.stringify(about), { ttl: ttlInSeconds });
    }

    return about;
  }
}

module.exports = AboutDataSource;
