import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";

describe("Home", () => {
  it("renders the hero with its headline, stats and call to action", () => {
    render(<Home />);

    const hero = screen.getByRole("region", { name: "Building value, Anchored in Trust" });

    expect(
      within(hero).getByRole("heading", { level: 1, name: "Building value, Anchored in Trust" }),
    ).toBeInTheDocument();
    expect(within(hero).getByText("2015")).toBeInTheDocument();
    expect(within(hero).getByText("16")).toBeInTheDocument();
    expect(within(hero).getByRole("link", { name: /Discover Evergreen Vista/ })).toHaveAttribute(
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

  it("renders the projects section with the featured project and four pieces of work", () => {
    render(<Home />);

    const projects = screen.getByRole("region", { name: "Built with Purpose" });

    expect(projects).toHaveAttribute("id", "projects");
    expect(within(projects).getAllByRole("figure")).toHaveLength(5);
    expect(within(projects).getByText("Evergreen Vista")).toBeInTheDocument();
    expect(within(projects).getByText("12 acres · 16 lots · 5 minutes from the U.S. border")).toBeInTheDocument();
    expect(within(projects).getByRole("link", { name: "Start a project" })).toHaveAttribute(
      "href",
      "/#contact",
    );
  });

  it("renders the values section with the five core values as an accordion", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const values = screen.getByRole("region", { name: "Why partners choose Rawasi" });

    expect(values).toHaveAttribute("id", "values");
    for (const name of ["Integrity", "Excellence", "Innovation", "Partnership", "Sustainability"]) {
      expect(within(values).getByText(name)).toBeInTheDocument();
    }

    const integrity = within(values).getByText("Integrity").closest("details");
    expect(integrity).not.toHaveAttribute("open");
    await user.click(within(values).getByText("Integrity"));
    expect(integrity).toHaveAttribute("open");
  });

  it("renders the approach section with the four mission statements in order", () => {
    render(<Home />);

    const approach = screen.getByRole("region", { name: "Our mission, in four parts" });

    expect(approach).toHaveAttribute("id", "approach");
    const items = within(approach).getAllByRole("listitem");
    expect(items).toHaveLength(4);
    expect(items[0]).toHaveTextContent(/undervalued real estate opportunities/);
    expect(items[3]).toHaveTextContent(/sustainable development/);
  });

  it("renders the contact section with a mail link and the land facts", () => {
    render(<Home />);

    const contact = screen.getByRole("region", { name: "Let’s build your next chapter" });

    expect(contact).toHaveAttribute("id", "contact");
    expect(within(contact).getByRole("link", { name: "Contact us" })).toHaveAttribute(
      "href",
      expect.stringMatching(/^mailto:.+@.+/),
    );
    expect(within(contact).getByText("Acres of residential land")).toBeInTheDocument();
    expect(within(contact).getByText("Lots planned")).toBeInTheDocument();
  });
});
