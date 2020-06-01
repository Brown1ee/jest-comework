import React from "react";
import SearchBox from "./SearchBox";
import { fireEvent, render } from "@testing-library/react";
import { useSearchPageContext } from "../SearchPageContext";

jest.mock("../SearchPageContext", () => ({
  useSearchPageContext: jest.fn(),
}));

describe("<SearchBox />", function () {
  it("should set user login on Enter", async () => {
    const setUserLogin = jest.fn();
    useSearchPageContext.mockImplementation(() => ({ setUserLogin }));
    const value = "Hello";
    const { getByTestId } = render(<SearchBox />);
    const searchBox = getByTestId("search-box-input");

    fireEvent.change(searchBox, { target: { value } });

    expect(searchBox).toHaveValue(value);

    fireEvent.keyDown(searchBox, { key: "Enter", code: "Enter" });

    expect(setUserLogin).toHaveBeenCalledWith(value);

    /**
     * Set a value to the search input
     * Expect that search input has the new value
     * Simulate Enter key in input
     * Expect that function setUserLogin from useSearchPageContext was called with input's value
     *
     * Useful links:
     * https://testing-library.com/docs/dom-testing-library/api-events
     * https://jestjs.io/docs/en/mock-functions.html#custom-matchers
     */
  });
});
