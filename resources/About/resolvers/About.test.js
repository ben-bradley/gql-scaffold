const About = require("./About");

describe("the About resolver", () => {
  it("should export an object", () => expect(About).toHaveProperty("dependencies"));

  describe("the About property resolvers", () => {
    it("name should return the name", () => {
      const parent = { name: "parent.name" };

      const result = About.name(parent);

      expect(result).toBe("parent.name");
    });
    it("version should return the version", () => {
      const parent = { version: "parent.version" };

      const result = About.version(parent);

      expect(result).toBe("parent.version");
    });
    it("description should return the description", () => {
      const parent = { description: "parent.description" };

      const result = About.description(parent);

      expect(result).toBe("parent.description");
    });
    it("dependencies hould return an array of objects", () => {
      const parent = {
        dependencies: {
          depNameA: "v1.0.0",
          depNameB: "v2.0.0"
        }
      };

      const result = About.dependencies(parent);

      expect(Array.isArray(result)).toBe(true);
      expect(result).toEqual([
        { name: "depNameA", version: "v1.0.0" },
        { name: "depNameB", version: "v2.0.0" }
      ]);
    });
  });
});
