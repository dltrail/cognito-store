import { act, render, screen, waitFor } from "@testing-library/react";
import ProductDetail from "./Basket";
import Basket from "./Basket";

const mockProduct = [
  { name: "cookie", describe: "delicious snack", price: 40 },
];
const mock = jest.fn();

describe("Basket Component", () => {
  it("renders the basket component", () => {
    render(<Basket />);
    const linkElement = screen.getByText(/basket/i);
    expect(linkElement).toBeInTheDocument();
  });
});
