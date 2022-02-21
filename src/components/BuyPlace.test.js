import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BuyPlace from "./BuyPlace";
import { HashRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";

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
