import { render, screen } from "@testing-library/react";
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
});
