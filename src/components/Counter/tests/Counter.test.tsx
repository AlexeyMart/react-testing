import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "../Counter";
import { content } from "../../../content";

describe("<Counter/>", () => {
  const {
    Counter: { setButtontext, incrementButtonText },
  } = content;

  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: incrementButtonText,
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: incrementButtonText,
    });

    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking increment button twice", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: incrementButtonText,
    });

    await user.dblClick(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 3 after clicking increment button three time", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: incrementButtonText,
    });

    await user.tripleClick(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("3");
  });
});
