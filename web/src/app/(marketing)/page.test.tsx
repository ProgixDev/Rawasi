import { render, screen, within } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders the hero with its headline, stats and call to action", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Building value, Anchored in Trust" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2015")).toBeInTheDocument();
    expect(screen.getByText("16")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Discover Evergreen Vista/ })).toHaveAttribute(
      "href",
      "#projects",
    );
  });

  it("renders the about section with its story and a link on to the approach", () => {
    render(<Home />);

    const about = screen.getByRole("region", {
      name: "Built by contractors, made for partnership",
    });

    expect(about).toHaveAttribute("id", "about");
    expect(within(about).getByText(/ALSY Group and HMA Group/)).toBeInTheDocument();
    expect(within(about).getByRole("link", { name: "Our approach" })).toHaveAttribute(
      "href",
      "/#approach",
    );
  });
});
