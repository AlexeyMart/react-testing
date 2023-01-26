import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "../Counter";
import { content } from "../../../content";

describe("<Counter/>", () => {
  const {
    Counter: { setButtonText, incrementButtonText },
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

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton"); // input number role
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButtonElement = screen.getByRole("button", {
      name: setButtonText,
    });
    await user.click(setButtonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");

    await user.clear(amountInput);
    await user.type(amountInput, "0");
    expect(amountInput).toHaveValue(0);
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: incrementButtonText,
    });
    const amountInput = screen.getByRole("spinbutton");
    const setButtonElement = screen.getByRole("button", {
      name: setButtonText,
    });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
