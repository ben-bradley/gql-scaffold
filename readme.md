# GQL Scaffold

This code aims to be a relatively balanced full-featured, but still bare-bones scaffolding for setting up an Apollo GQL server.

## Features

- JWT auth built-in
- Example logging framework
- Opinionated folder structure
- Separation of GQL components
- Alignment with Apollo function signatures
- Able to write `.gql` files for type defs
- Built-in testing

## Setup

After cloning the repo, you'll need to run `npm run setup`. This command does a number of things:
1. Copy the `.hooks/*` into `.git/hooks` to enable pre-push, pre-commit, and other `git` hooks
2. Runs `nvm install` to ensure that the proper version of Node.js is installed
3. Runs `npm i` to install all the dependencies

## Folder Structure

The folder structure is derived from the function signature for `ApolloServer()`.

```
/
  resources/
    Foobar/
      data-sources/
        index.js
      resolvers/
        Foobar.js
        Foobar.test.js
        index.js
        Mutation/
          create-foobar.js
          create-foobar.test.js
          index.js
          remove-foobar.js
          remove-foobar.test.js
          update-foobar.js
          update-foobar.test.js
        Query/
          index.js
          foobar.js
          foobar.test.js
      type-defs/
        Foobar.gql
        index.js
        Query.gql
  data-sources.js
  index.js
  resolvers.js
  type-defs.js
```

Ideally each file will contain a single, narrowly-focused function. This will accelerate troubleshooting and testing. As a file grows, it should be converted into a folder with the same name and an `index.js` file which binds together the separate function files.

## Testing

Each JS file that contains function code (typically every non-index file) should have a partner test file.
