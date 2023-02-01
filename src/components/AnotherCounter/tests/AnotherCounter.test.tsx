import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AnotherCounter } from "../AnotherCounter";
import { content } from "../../../content";

describe("<AnotherCounter/>", () => {
  const {
    AnotherCounter: { title, incrementButtonText, decrementButtonText },
  } = content;
  test("renders correctly", () => {
    render(<AnotherCounter count={0} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();

    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    render(
      <AnotherCounter
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );

    const incrementButton = screen.getByRole("button", {
      name: incrementButtonText,
    });
    const decrementButton = screen.getByRole("button", {
      name: decrementButtonText,
    });

    await user.dblClick(incrementButton);
    await user.click(decrementButton);

    expect(handleIncrement).toHaveBeenCalledTimes(2);
    expect(handleDecrement).toHaveBeenCalled();
  });
});
