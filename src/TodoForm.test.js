import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("todo form component", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  it("contains expected todo form div", function () {
    const { container, debug } = render(<TodoForm />);
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  });

  it("edit todo form", function () {
    const { container, getByText } = render(<TodoForm
      initialFormData={{
        id: 1,
        title: "test",
        description: "test",
        priority: 1
      }} />);
    expect(getByText("test")).toBeInTheDocument();
  });

  it("snapshot test", function () {
    const { container } = render(<TodoForm />);
    expect(container).toMatchSnapshot();
  });
});

