import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Email from "./Email";
describe("<Email />", function () {
  it("should renders show email button", () => {
    const email = "email@email.com";
    const { getByTestId } = render(<Email value={email} />);

    const emailButton = getByTestId("show-email-button");
    const emailComponent = getByTestId("show-email-component");
    expect(emailComponent).not.toHaveTextContent(email);
    expect(emailButton).toBeVisible();

    /**
     * Check if the right button is displayed
     * Ensure that email text in NOT displayed
     *
     *
     * Useful links:
     * https://jestjs.io/docs/en/expect#not
     */
  });
  it("should renders value when button clicked", () => {
    const email = "email@email.com";

    const {
      container: { firstChild },
      debug,
      getByTestId,
    } = render(<Email value={email} />);
    const emailButton = getByTestId("show-email-button");

    fireEvent.click(emailButton);

    expect(emailButton).not.toBeInTheDocument();
    expect(firstChild).toHaveTextContent(email);
    debug();

    /**
     * After button was clicked
     * Check that button is NOT displayed (not exists in DOM)
     * Ensure that email text in displayed
     *
     * Useful links:
     * https://github.com/testing-library/jest-dom#tobeinthedocument
     */
  });
});
