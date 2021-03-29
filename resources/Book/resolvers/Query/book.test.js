const book = require("./book");

describe("the book query resolver", () => {
  it("should export a function", () => {
    expect(typeof book).toBe("function");
  });

  it("should call the books data-source", async () => {
    const context = {
      dataSources: {
        books: {
          get: jest.fn()
        }
      }
    };
    const args = {
      id: "foobar"
    };

    await book(null, args, context);

    expect(context.dataSources.books.get).toHaveBeenCalledWith("foobar");
  });
});
