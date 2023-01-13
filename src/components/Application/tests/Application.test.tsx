import { render, screen } from "@testing-library/react";
import { Application } from "../Application";

describe("<Application/>", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    // can be additionally defined by selector (p, span, div)
    const paragraphElement = screen.getByText("All fields are mandatory", {
      selector: "p",
    });
    expect(paragraphElement).toBeInTheDocument();
    // the same element with callback
    const paragraphElement1 = screen.getByText((content, _element) => {
      return content.startsWith("All fields are mandatory");
    });
    expect(paragraphElement1).toBeInTheDocument();

    // by title attribute
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    // elements with alt attribute (img, input, textarea)
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    // getByTestId (data-testid="something")
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" }); // "Name" - text in the <label/> or inner text (f.e. in button)
    expect(nameElement).toBeInTheDocument();
    // the same element by getByLabelText, can be additionally defined by selector
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();
    // the same element by getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();
    // the same element by getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("Alex");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", { name: "Submit" }); // "Submit" - text inside
    expect(submitButtonElement).toBeInTheDocument();
  });
});
