import { render, screen } from "@testing-library/react";
import Header from "./Header";
describe("Header Component", () => {
  it("renders correct header text", () => {
    render(<Header />);
    const linkElement = screen.getByText(/cognito store/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders 3 navigation links", () => {
    render(<Header />);
    const navItem = screen.getAllByRole("listitem");
    expect(navItem).toHaveLength(3);

    // eslint-disable-next-line testing-library/no-debugging-utils
  });

  it("renders 4 navigation links", () => {
    render(<Header />);
    const navItem = screen.getAllByRole("listitem");
    expect(navItem).toHaveLength(3);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.logTestingPlaygroundURL();
  });
});
