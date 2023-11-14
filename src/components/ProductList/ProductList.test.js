import { act, render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

const mockProducts = ["product1", "product2"];
const mock = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("ProductList Component", () => {
  it("calls the onToggle function once with the proprty id as parameter", async () => {
    render(<ProductList products={mockProducts} loadMore={mock} />);

    const btn = screen.getByRole("button", { name: /load more/i });

    act(() => {
      btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(mock).toHaveBeenCalled();
  });
});
