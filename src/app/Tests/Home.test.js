import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  test("renders main heading", () => {
    render(<Home />);

    expect(
      screen.getByText("Mini Tourist App")
    ).toBeInTheDocument();
  });

  test("renders guide description", () => {
    render(<Home />);

    expect(
      screen.getByText("I will guide you to amazing places")
    ).toBeInTheDocument();
  });

  test("renders button", () => {
    render(<Home />);

    expect(
      screen.getByRole("button", {
        name: /Choose Your Tour/i,
      })
    ).toBeInTheDocument();
  });
});