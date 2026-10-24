import { render, screen, within } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the logo, the section links and the contact call to action", () => {
    render(<Header />);

    expect(screen.getByRole("img", { name: /Rawasi/ })).toBeInTheDocument();

    const nav = screen.getByRole("navigation", { name: "Main" });
    for (const label of ["About", "Projects", "Values", "Approach", "Contact"]) {
      expect(within(nav).getByRole("link", { name: label })).toBeInTheDocument();
    }
    expect(within(nav).getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/#projects",
    );

    expect(screen.getByRole("link", { name: "Contact us" })).toHaveAttribute("href", "/#contact");
  });
});
