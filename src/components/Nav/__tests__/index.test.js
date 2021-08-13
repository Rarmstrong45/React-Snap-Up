import React from "react";
import {
  render,
  cleanup,
  getByText,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

afterEach(cleanup);

describe("Nav Component", () => {
  //baseline test
  it("renders", () => {
    render(<Nav />);
  });
  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    //assert value comparisson
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visable", () => {
  it("inserts emoji into the h2", () => {
    //arrange
    const { getByLabelText } = render(<Nav />);
    //assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visable", () => {
  it("inserts texts into the links", () => {
    //Arrange
    const { getByTestId } = render(<Nav />);
    //Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
})
