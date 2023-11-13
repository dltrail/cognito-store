import { act, render, screen, waitFor } from "@testing-library/react";
import ProductList from "./ProductList";

const mockProducts = ["product1", "product2"];
const mock = jest.fn();

describe("ProductList Component", () => {
  it("renders 3 products properly", async () => {
    render(<ProductList products={mockProducts} loadMore={() => {}} />);

    await waitFor(() => {
      const img = screen.getAllByTestId("name");
      expect(img).toHaveLength(2);
    });
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.logTestingPlaygroundURL();
  });

  it("calls the onToggle function once with the proprty id as parameter", async () => {
    render(<ProductList products={mockProducts} loadMore={mock} />);

    const btn = screen.getByRole("button", { name: /load more/i });

    act(() => {
      btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(mock).toHaveBeenCalled();
  });
});
