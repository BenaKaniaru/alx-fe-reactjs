// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the TodoList component and initial todos", () => {
    render(<TodoList />);

    // Check that the todo list renders correctly
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a React App")).toBeInTheDocument();
    expect(screen.getByText("Test React Components")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByText("Add Todo"));

    // Verify new todo appears
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can toggle the completion status of a todo", () => {
    render(<TodoList />);

    // Simulate clicking the first todo to toggle completion
    fireEvent.click(screen.getByText("Learn React"));

    // Check if the text is struck through
    expect(screen.getByText("Learn React")).toHaveStyle(
      "text-decoration: line-through"
    );
  });

  test("can delete a todo", () => {
    render(<TodoList />);

    // Simulate clicking the delete button for the first todo
    fireEvent.click(screen.getAllByText("Delete")[0]);

    // Verify the todo is deleted
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
