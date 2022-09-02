import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={[{
      id: 1,
      title: "test",
      description: "test",
      priority: 1
    }]} />);
  });

  it("renders todo title", function () {
    const { container, queryByText } = render(<TopTodo todos={[{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }]} />);
    expect(queryByText("testTitle")).toBeInTheDocument();
  });

  it("renders todo description", function () {
    const { container, debug, queryByText } = render(<TopTodo todos={[{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }]} />);
    expect(queryByText("testDesc")).toBeInTheDocument();
  });

  it("snapshot test", function () {
    const { container } = render(<TopTodo todos={[{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }]} />);
    expect(container).toMatchSnapshot();
  });

});

// todo={{
//   id: 1,
//   title: "test",
//   description: "test",
//   priority: 1
// }}

