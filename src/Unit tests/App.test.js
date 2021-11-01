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
    const contactUsLink = screen.getByTestId("contact-us-link");
    const loginLink = screen.getByTestId("login-link");

    expect(contactUsLink.textContent).toEqual("Contact Us");
    expect(loginLink.textContent).toEqual("Log in");
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
