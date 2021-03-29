const { DataSource } = require("apollo-datasource");
const { InMemoryLRUCache } = require("apollo-server-caching");

const db = require("./db");

class BookDataSource extends DataSource {
  constructor () {
    super();
    this.db = db;
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

    const doc = this.db.get(id);

    if (ttlInSeconds) {
      this.cache.set(cacheKey, JSON.stringify(doc), { ttl: ttlInSeconds });
    }

    return doc;
  }

  async getAll () {
    return this.db.values();
  }

  async create (book) {
    this.db.set(book.id, book);

    return book;
  }

  async update (id, update) {
    const book = this.db.get(id);

    const updatedBook = {
      ...book,
      ...update
    };

    this.db.set(id, updatedBook);

    return updatedBook;
  }
}

module.exports = BookDataSource;
