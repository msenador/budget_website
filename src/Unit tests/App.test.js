import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App/Home", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders logo", () => {
    const logo = screen.queryByTestId("home-logo");

    expect(logo).toBeTruthy();
  });

  test("renders Contact Us and Log in links", () => {
    const contactUs = screen.getByText("Contact Us");
    const login = screen.getByText("Log in");
  });

  test("renders quotes", () => {
    const quotes = screen.queryByTestId("quotes");

    expect(quotes).toBeTruthy();
  });

  test("renders the main video", () => {
    const mainVid = screen.queryByTestId("main-video");

    expect(mainVid).toBeTruthy();
  });
});
