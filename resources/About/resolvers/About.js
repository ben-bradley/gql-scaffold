const About = {
  name: (parent) => parent.name,
  version: (parent) => parent.version,
  description: (parent) => parent.description,
  dependencies: (parent) => {
    const names = Object.keys(parent.dependencies);

    const dependencies = names.map((name) => ({
      name,
      version: parent.dependencies[name]
    }));

    return dependencies;
  }
};

module.exports = About;
