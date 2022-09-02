import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<EditableTodo
      todo={{
        id: 1,
        title: "test",
        description: "test",
        priority: 1
      }} />);
  });

  it("todo component is in the document", function () {
    const { container, debug, queryByText } =
      render(<EditableTodo
        todo={{
          id: 1,
          title: "test",
          description: "test",
          priority: 1
        }} />);
    const todo = queryByText("Edit");
    expect(todo).toBeInTheDocument();
    //expect(container.querySelector(".NewTodoForm")).not.toBeInTheDocument();
  });

  it("todo form is in the document when edit button is clicked", function () {
    const { container } =
      render(<EditableTodo
        todo={{
          id: 1,
          title: "test",
          description: "test",
          priority: 1
        }} />);

    fireEvent.click(container.querySelector(".EditableTodo-toggle"));
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
    expect(container.querySelector(".Todo")).not.toBeInTheDocument();
  });

  it("snapshot test", function () {
    const { container } =
      render(<EditableTodo
        todo={{
          id: 1,
          title: "test",
          description: "test",
          priority: 1
        }} />);
    expect(container).toMatchSnapshot();
  });
});

