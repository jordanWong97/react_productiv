import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

  it("contains expected title", function () {
    const result = render(<TodoApp />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it ("rendered quotes app", function () {
    const result = render(<TodoApp />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  });
});

