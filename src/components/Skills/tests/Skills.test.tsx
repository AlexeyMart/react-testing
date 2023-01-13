import { render, screen } from "@testing-library/react";
import { Skills } from "../Skills";
import { content } from "../../../content";

describe("<Skills/>", () => {
  const {
    Skills: { list: skills, learningButtonText, loginButtonText },
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

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", { name: loginButtonText });
    expect(loginButton).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: learningButtonText,
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: learningButtonText,
      },
      { timeout: 5000 } // default is 1000ms
    );

    expect(startLearningButton).toBeInTheDocument();
  });

  test("render title correctly", () => {
    const { container } = render(<Skills skills={skills} />);

    // not recommended to get element by querySelector
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const titleElement = container.querySelector(".skills__title");
    expect(titleElement).toBeInTheDocument();
  });
});
