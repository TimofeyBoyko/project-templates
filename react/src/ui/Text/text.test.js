import { cleanup, screen, render } from "@testing-library/react";
import Text from "./";

afterEach(cleanup);

describe("UI: Text", () => {
  it("Text rendered without error", () => {
    render(<Text data-testid="text-element">Test text</Text>);

    const element = screen.getByTestId("text-element");

    expect(element).toBeTruthy();
  });
});
