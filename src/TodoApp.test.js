import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

  it("contains add new todo form title", function () {
    const { container, debug, queryByText } = render(<TodoApp />);
    expect(queryByText("Add Nü")).toBeInTheDocument();
  });


});

