const echo = require("./echo");

describe("the echo mutation resolver", () => {
  it("should export a function", () => expect(typeof echo).toBe("function"));

  describe("the happy path", () => {
    it("should return a templated string", () => {
      const context = {
        token: {
          username: "context.token.username"
        }
      };
      const args = {
        input: "args.input"
      };

      const result = echo(null, args, context);

      expect(result).toBe("Echoing back \"args.input\" for context.token.username");
    });
  })
});
