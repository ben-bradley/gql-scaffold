const { DataSource } = require("apollo-datasource");

const pkg = require("../../../package");

class AboutDataSource extends DataSource {
  constructor () {
    super()
  }

  initialize ({ context } = {}) {
    this.context = context;
  }

  async get () {
    return pkg;
  }
}

module.exports = AboutDataSource;
