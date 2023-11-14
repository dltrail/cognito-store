import { act, render, screen } from "@testing-library/react";
import Button from "./Button";

const mock = jest.fn();

describe("Buttton Component", () => {
  it("calls the onButtonClick function once with the proprty id as parameter", async () => {
    render(<Button onButtonClick={mock}>test button</Button>);

    const btnText = screen.getByRole("button", { name: /test button/i });

    expect(btnText).toBeInTheDocument();
  });

  it("has the correct text value", async () => {
    render(<Button onButtonClick={mock}>test button</Button>);

    const btn = screen.getByRole("button", { name: /test button/i });

    act(() => {
      btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(mock).toHaveBeenCalled();

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.logTestingPlaygroundURL();
  });
});
