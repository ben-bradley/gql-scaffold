'use strict';

const { ApolloServer } = require('apollo-server');
const apolloOptions = require('./options');

const server = new ApolloServer(apolloOptions);

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`🚀 Server ready at ${url}`);
});
