describe("matchers", () => {
  //Se pueden poner 'test' o 'it'
  it("toBe", () => {
    expect(true).toBe(true);
  });

  it("toEqual", () => {
    //Con objetos
    const data = { one: 1 };
    expect(data).toEqual({ one: 1 });

    //Con arrays
    const arr = ["one", "two"];
    expect(arr).toEqual(["one", "two"]);
  });

  it("not", () => {
    expect(true).not.toBe(false);
  });

  it("string", () => {
    const str = "Hello World";
    expect(str).not.toMatch(/Hola/);
  });

  it("thrown", () => {
  });
});
