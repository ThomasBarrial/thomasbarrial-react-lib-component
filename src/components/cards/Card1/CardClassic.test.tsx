import React from "react";
import { render } from "@testing-library/react";
import CardClassic from "./CardClassic";

describe("Card", () => {
  test("renders the card component", () => {
    render(<CardClassic label="card" />);
  });
});
