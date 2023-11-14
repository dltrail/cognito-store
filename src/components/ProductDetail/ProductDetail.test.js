import { act, render, screen, waitFor } from "@testing-library/react";
import ProductDetail from "./ProductDetail";

const mockProduct = {
  id: 300,
  name: "cookie",
  description: "delicious snack",
  price: 40,
};

const mock = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Product Detail Component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ProductDetail product={mockProduct} />);
  });

  it("renders product details with all data to correctly", () => {
    const elements = [
      screen.getByText("cookie"),
      screen.getByText(/delicious snack/i),
      screen.getByText(/40/i),
    ];

    for (let element of elements) {
      expect(element).toBeInTheDocument();
    }

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.logTestingPlaygroundURL();
  });
});
