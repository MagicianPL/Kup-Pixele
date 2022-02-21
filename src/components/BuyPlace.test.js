import React from "react";
import { render, screen } from "@testing-library/react";
import BuyPlace from "./BuyPlace";
import { HashRouter, Routes, Route } from "react-router-dom";

test("renders component on the screen", () => {
  render(
    <HashRouter>
      <BuyPlace />
    </HashRouter>
  );
  const headerEl = screen.getByTestId("header");

  expect(headerEl.textContent).toBe("Kupno Miejsc");
});
