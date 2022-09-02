import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={[{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }]} />);
  });

  it("contains an edit button for a todo", function () {
    const { queryByText } = render(<EditableTodoList todos={[{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }]} />);
    expect(queryByText("Edit")).toBeInTheDocument();
  });

  it("renders title of an editable todo", function () {
    const { queryByText } = render(<EditableTodoList todos={[{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }]} />);
    expect(queryByText("testTitle")).toBeInTheDocument();
  });

  it("snapshot test", function () {
    const { container } = render(<EditableTodoList todos={[{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }]} />);
    expect(container).toMatchSnapshot();
  });
});

