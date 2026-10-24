import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./ThemeToggle";

// next-themes reads matchMedia and localStorage, which the test environment
// doesn't provide; what matters here is which mode the button asks for.
const setTheme = jest.fn();
let resolvedTheme: "light" | "dark" = "light";

jest.mock("next-themes", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  useTheme: () => ({ theme: "system", resolvedTheme, setTheme }),
}));

// jsdom has none of these browser APIs; each test installs what it needs.
type MutableDocument = { startViewTransition?: unknown };
const doc = document as unknown as MutableDocument;
const root = document.documentElement as unknown as { animate?: unknown };

function mockReducedMotion(reduced: boolean) {
  window.matchMedia = jest.fn().mockReturnValue({ matches: reduced }) as unknown as typeof window.matchMedia;
}

describe("ThemeToggle", () => {
  beforeEach(() => {
    setTheme.mockClear();
    delete doc.startViewTransition;
    delete root.animate;
    mockReducedMotion(false);
  });

  it("switches to dark when the site is showing light", async () => {
    resolvedTheme = "light";
    render(<ThemeToggle />);

    await userEvent.click(screen.getByRole("button", { name: "Toggle dark mode" }));

    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("switches to light when the site is showing dark", async () => {
    resolvedTheme = "dark";
    render(<ThemeToggle />);

    await userEvent.click(screen.getByRole("button", { name: "Toggle dark mode" }));

    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith("light");
  });

  describe("with View Transitions support", () => {
    let animate: jest.Mock;
    let startViewTransition: jest.Mock;

    beforeEach(() => {
      animate = jest.fn();
      root.animate = animate;
      // The browser runs the callback, then resolves `ready` once it has taken
      // its "after" snapshot — the same order here.
      startViewTransition = jest.fn((update: () => void) => {
        update();
        return { ready: Promise.resolve() };
      });
      doc.startViewTransition = startViewTransition;
    });

    it("switches the mode inside the transition and reveals it as a circle from the button", async () => {
      resolvedTheme = "light";
      render(<ThemeToggle />);

      await userEvent.click(screen.getByRole("button", { name: "Toggle dark mode" }));

      expect(startViewTransition).toHaveBeenCalledTimes(1);
      expect(setTheme).toHaveBeenCalledWith("dark");

      await Promise.resolve(); // let `ready` resolve
      expect(animate).toHaveBeenCalledTimes(1);
      const [keyframes, options] = animate.mock.calls[0];
      expect(keyframes.clipPath[0]).toMatch(/^circle\(0px at /);
      expect(keyframes.clipPath[1]).toMatch(/^circle\([\d.]+px at /);
      expect(options).toMatchObject({
        duration: 620,
        pseudoElement: "::view-transition-new(root)",
      });
    });

    it("skips the animation for visitors who prefer reduced motion", async () => {
      mockReducedMotion(true);
      resolvedTheme = "light";
      render(<ThemeToggle />);

      await userEvent.click(screen.getByRole("button", { name: "Toggle dark mode" }));

      expect(startViewTransition).not.toHaveBeenCalled();
      expect(setTheme).toHaveBeenCalledWith("dark");
    });
  });
});
