import { render, screen } from "../../../test-utils";
import { Mui } from "../Mui";

describe("<Mui/>", () => {
  test("correctly renders a theme mode", () => {
    render(<Mui />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toHaveTextContent("light mode");
  });
});
