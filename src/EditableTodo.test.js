import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./App";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<EditableTodo />);
  });

  it("todo component is in the document", function () {
    const { container } =
      render(<EditableTodo />);
    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container.querySelector(".NewTodoForm")).not.toBeInTheDocument();
  });

  it("todo form is in the document when edit button is clicked", function () {
    const { container } =
      render(<EditableTodo
              todo={{id: 1,
                     title: "test",
                     description: "test",
                     priority: 1}}/>);

    fireEvent.click(container.querySelector(".EditableTodo-toggle"))
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
    expect(container.querySelector(".Todo")).not.toBeInTheDocument();
  });

  it ("snapshot test", function () {
    const { container } =
      render(<EditableTodo />);
    expect(container).toMatchSnapshot();
  });
});

