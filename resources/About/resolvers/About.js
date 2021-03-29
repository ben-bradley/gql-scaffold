const About = {
  name: (parent) => parent.name,
  version: (parent) => parent.version,
  description: (parent) => parent.description,
  dependencies: (parent) => parent.dependencies
};

module.exports = About;
