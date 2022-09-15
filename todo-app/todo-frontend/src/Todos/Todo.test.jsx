import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Renders todo", () => {
  const mockHandler = vi.fn();

  test("with done equals to true", () => {
    const todo = {
      text: "Hello true",
      done: true,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={mockHandler}
        onClickComplete={mockHandler}
      />,
    );

    const element = screen.getByText("Hello true").parentElement;
    expect(element).toHaveTextContent("This todo is done");
  });

  test("with done equals to false", () => {
    const todo = {
      text: "Hello false",
      done: false,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={mockHandler}
        onClickComplete={mockHandler}
      />,
    );

    const element = screen.getByText("Hello false").parentElement;
    expect(element).toHaveTextContent("This todo is not done");
  });
});
