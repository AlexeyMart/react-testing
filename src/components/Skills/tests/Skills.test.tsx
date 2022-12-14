import { render, screen } from "@testing-library/react";
import { Skills } from "../Skills";
import { content } from "../../../content";

describe("<Skills/>", () => {
  const {
    Skills: { list: skills },
  } = content;

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
});
