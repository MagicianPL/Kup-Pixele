import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import BuyPlace from "./BuyPlace";
import { HashRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";

describe("BuyPlace Component", () => {
  test("renders component on the screen", () => {
    render(
      <HashRouter>
        <BuyPlace />
      </HashRouter>
    );
    const headerEl = screen.getByTestId("header");

    expect(headerEl.textContent).toBe("Kupno Miejsc");
  });

  test("inputs validation", async () => {
    //Mocked UserContext data - user is true so he is logged
    render(
      <HashRouter>
        <UserContext.Provider value={{ user: true }}>
          <BuyPlace />
        </UserContext.Provider>
      </HashRouter>
    );
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    await waitFor(() => {
      expect(
        screen.getByText("Wszystkie wymagane pola muszą być wypełnione")
      ).toBeInTheDocument();
    });
  });

  test("should display specific error message when value on specific input is not an integer", async () => {
    render(
      <HashRouter>
        <UserContext.Provider value={{ user: true }}>
          <BuyPlace />
        </UserContext.Provider>
      </HashRouter>
    );
    const nameInputEl = screen.getByPlaceholderText("Podaj własną nazwę");
    const urlInputEl = screen.getByPlaceholderText("Adres www");
    const qtyInputEl = screen.queryByTestId("qty");
    const btn = screen.getByRole("button");

    fireEvent.input(nameInputEl, {
      target: { value: "Michał" },
    });
    fireEvent.change(urlInputEl, { target: { value: "www.test.com" } });
    fireEvent.change(qtyInputEl, { target: { value: 3.4 } });

    fireEvent.click(btn);

    await waitFor(() => {
      expect(
        screen.getByText("Nieprawidłowa ilość miejsc")
      ).toBeInTheDocument();
    });
  });
});
