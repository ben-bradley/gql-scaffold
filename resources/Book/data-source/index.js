const { DataSource } = require("apollo-datasource");
const { InMemoryLRUCache } = require("apollo-server-caching");

const books = require("./books");

class BookDataSource extends DataSource {
  constructor () {
    super();
    this.data = books;
  }

  initialize ({ context, cache } = {}) {
    this.context = context;
    this.cache = cache || new InMemoryLRUCache();
  }

  didEncounterError (error) {
    throw error;
  }

  cacheKey (id) {
    return `book-${id}`;
  }

  async get (id, { ttlInSeconds } = {}) {
    const cacheKey = this.cacheKey(id);
    const cacheDoc = await this.cache.get(cacheKey);
    if (cacheDoc) {
      return JSON.parse(cacheDoc);
    }

    const doc = this.data.find((book) => book.id === id);

    if (ttlInSeconds) {
      this.cache.set(cacheKey, JSON.stringify(doc), { ttl: ttlInSeconds });
    }

    return doc;
  }

  async getAll () {
    return this.data;
  }

  // async update (id, newDoc) {
  //   try {
  //     await this.db.update(id, newDoc)
  //     this.cache.delete(this.cacheKey(id))
  //   } catch (error) {
  //     this.didEncounterError(error)
  //   }
  // }
}

module.exports = BookDataSource;
