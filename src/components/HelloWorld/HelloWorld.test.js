import React from "react";
import { screen, render } from "@testing-library/react";

import { HelloWorld } from "./HelloWorld";

describe("HelloWorld", () => {
  test("renders hello world", () => {
    render(<HelloWorld />);
    screen.getByText("Hello World");
  });
});
