import React from "react";
import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";

describe("Counter", () => {
  test("display zero initial count", () => {
    render(<Counter />);

    const result = screen.getByText("Clicked times: 0");
    expect(result).toBeInTheDocument();
  });
});
