import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./App";

describe("todo form component", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  it("contains expected todo form div", function () {
    const { container } = render(<TodoForm />);
    expect(container.querySelector("NewTodoForm")).toBeInTheDocument();
  });

  it ("snapshot test", function () {
    const { container } = render(<TodoForm />);
    expect(container).toMatchSnapshot();
  });
});

