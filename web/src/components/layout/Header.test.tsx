import { render, screen, within } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the logo, the section links and the contact call to action", () => {
    render(<Header />);

    // Two logos, one per mode; CSS shows the one that matches (jsdom applies
    // no stylesheet, so both are in the tree here).
    const logos = screen.getAllByRole("img", { name: /Rawasi/ });
    expect(logos).toHaveLength(2);
    expect(logos[0].getAttribute("src")).toContain(encodeURIComponent("/Logo.png"));
    expect(logos[1].getAttribute("src")).toContain(encodeURIComponent("/Logo-dark.png"));

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
