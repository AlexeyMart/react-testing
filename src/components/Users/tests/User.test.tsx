import { render, screen } from "@testing-library/react";
import { Users } from "../Users";
import { content } from "../../../content";

describe("<Users/>", () => {
  const {
    Users: { title },
  } = content;

  test("renders correctly", () => {
    render(<Users />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
});
