import React from "react";
import { render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import PageTitle from "./PageTitle";

describe("<PageTitle />", function () {
  it("should match the snapshot", () => {
    const { getByTestId } = render(<PageTitle label="Github user details" />);

    const pageTitle = getByTestId("page-title");
    expect(pageTitle).toMatchSnapshot();

    /**
     * Write a snapshot test for PageTitle component
     * Don't forget to add snapshot file to the git
     */
  });
});
