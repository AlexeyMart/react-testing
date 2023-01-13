import { render, screen } from "@testing-library/react";
import { content } from "../../../content";
import { Greet } from "../Greet";

describe("<Greet/>", () => {
  test("renders correctly greeting without name", () => {
    render(<Greet />);

    const greetingText = screen.getByText(content.Greet.text, { exact: true });
    expect(greetingText).toBeInTheDocument();
  });

  test("renders correctly greeting with name", () => {
    const name = "Alex";
    render(<Greet name={name} />);

    const greetingText = screen.getByText(`${content.Greet.text}, ${name}`, {
      exact: true,
    });
    expect(greetingText).toBeInTheDocument();
  });
});
