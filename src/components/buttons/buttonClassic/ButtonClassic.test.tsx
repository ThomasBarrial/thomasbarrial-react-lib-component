import React from "react";
import { render } from "@testing-library/react";

import Button from "./ButtonClassic";

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <Button label="Hello world!" backgroundColor="red" color="white" isBold />
    );
  });
});
