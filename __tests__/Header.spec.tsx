import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "@/app/components/header";

describe("Header", () => {
  it("Renderizar cabeçalho", () => {
    render(<Header />);

    const heading = screen.getByRole("banner");

    expect(heading).toBeInTheDocument();
  });
  it("Renderizar titulo maior e titulo menor", () => {
    render(<Header />);

    const biggerTitle = screen.getByText("HMD");
    const minorTitle = screen.getByText("System");

    expect(biggerTitle).toBeInTheDocument();
    expect(minorTitle).toBeInTheDocument();
  });

  it("Renderizar componente ShoppingCart", () => {
    render(<Header />);

    const shoppingCart = screen.getByTestId("shopping-cart");

    expect(shoppingCart).toBeInTheDocument();
  });
});

