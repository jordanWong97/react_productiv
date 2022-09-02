import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("todo component", function () {
  it("renders without crashing", function () {
    render(<Todo id={1} title="test" description="test" priority={1}/>);
  });

  it("todo div to be in the document", function () {
    const { container } =
      render(<Todo id={1} title="test" description="test" priority={1}/>);
    expect(container.querySelector(".Todo")).toBeInTheDocument();
  });

  it ("snapshot test", function () {
    const { container } =
      render(<Todo id={1} title="test" description="test" priority={1}/>);
    expect(container).toMatchSnapshot();
  });
});

