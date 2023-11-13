import { act, render, screen, waitFor } from "@testing-library/react";
import ProductDetail from "./ProductDetail";

const mockProduct = [
  { name: "cookie", describe: "delicious snack", price: 40 },
];
const mock = jest.fn();

describe("Product Detail Component", () => {
  it("renders product details with all data to correctly", () => {
    render(<ProductDetail product={mockProduct} />);
    const elements = [
      screen.getByRole("button", { name: /add to basket/i }),
      screen.getByRole("img"),
    ];

    for (let element of elements) {
      expect(element).toBeInTheDocument();
    }
  });
});
