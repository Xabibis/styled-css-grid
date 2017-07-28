import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Cell from "../Cell";

describe("<Cell/>", () => {
  test("matches snapshot with default args", () => {
    const tree = renderer.create(<Cell />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("'width' prop sets 'grid-column-end'", () => {
    const tree = renderer.create(<Cell width={3} />).toJSON();
    expect(tree).toHaveStyleRule("grid-column-end", "span 3");
  });

  test("'height' prop sets 'grid-row-end'", () => {
    const tree = renderer.create(<Cell height={3} />).toJSON();
    expect(tree).toHaveStyleRule("grid-row-end", "span 3");
  });
});