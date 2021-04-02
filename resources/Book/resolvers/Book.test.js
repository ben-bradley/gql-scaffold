const Book = require("./Book");

describe("The Book resolver", () => {
  it("should export an object", () => {
    expect(Object.keys(Book)).toEqual([ "title", "author" ]);
  });

  describe("the book title resolver", () => {
    it("should be a function", () => {
      expect(typeof Book.title).toBe("function");
    });

    it("should return the title", () => {
      const parent = { title: "foobar" };

      expect(Book.title(parent)).toEqual("The title is foobar");
    });
  });

  describe("the book author resolver", () => {
    const parent = { author: "foobar" };

    expect(Book.author(parent)).toEqual("foobar");
  });
});
