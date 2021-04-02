const about = require("./about");

describe("the about query resolver", () => {
  it("should export a function", () => expect(typeof about).toBe("function"));

  describe("the happy path", () => {
    it("should return what the about dataSource provides", () => {
      const context = {
        dataSources: {
          about: {
            get: () => "result from dataSources.about.get()"
          }
        }
      };

      const result = about(null, null, context);

      expect(result).toBe("result from dataSources.about.get()");
    });
  })
});
