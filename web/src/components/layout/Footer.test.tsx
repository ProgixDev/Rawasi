import { render, screen, within } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the section links, the contact details and a way back to the top", () => {
    render(<Footer />);

    const explore = screen.getByRole("navigation", { name: "Explore" });
    for (const label of ["About", "Projects", "Values", "Approach"]) {
      expect(within(explore).getByRole("link", { name: label })).toBeInTheDocument();
    }
    expect(within(explore).getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/#projects",
    );

    expect(screen.getByRole("link", { name: /@/ })).toHaveAttribute("href", expect.stringMatching(/^mailto:/));
    expect(screen.getByText("ALSY Group")).toBeInTheDocument();
    expect(screen.getByText("HMA Group")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to top" })).toHaveAttribute("href", "#top");
    expect(
      screen.getByText(`© ${new Date().getFullYear()} Rawasi. All rights reserved.`),
    ).toBeInTheDocument();
  });
});
