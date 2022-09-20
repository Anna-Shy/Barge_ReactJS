import { render } from "@testing-library/react";
import App from "./App";

const loadGrain = (levels) => {
  let count = 0;

  for (let i = 0; i < levels.length - 1; i++) {
    if (i === 0) {
      continue;
    } else {
      let firstMax = Math.max(...levels.slice(0, i));
      let secondMax = Math.max(...levels.slice(i));

      let num = Math.min(firstMax, secondMax) - levels[i];

      if (num > 0) {
        count += num;
      }
    }
  }
  return count;
};

describe("check the solution of the loadGrain function", () => {
  render(<App />);

  it("[4, 1, 3] should be 2", () => {
    expect(loadGrain([4, 1, 3])).toBe(2);
  });
  it("[2, 1, 5, 2, 7, 4, 10] should be 7", () => {
    expect(loadGrain([2, 1, 5, 2, 7, 4, 10])).toBe(7);
  });
  it("[2, 0, 1, 5, 2, 7] should be 6", () => {
    expect(loadGrain([2, 0, 1, 5, 2, 7])).toBe(6);
  });
  it("[2, 4, 2] should be 0", () => {
    expect(loadGrain([2, 4, 2])).toBe(0);
  });
  it("[7, 4] should be 0", () => {
    expect(loadGrain([7, 4])).toBe(0);
  });
  it("[] should be 0", () => {
    expect(loadGrain([])).toBe(0);
  });
  it("[4, 0, 1, 3] should be 5", () => {
    expect(loadGrain([4, 0, 1, 3])).toBe(5);
  });
  it("[3, 2, 3, 2, 3] should be 2", () => {
    expect(loadGrain([3, 2, 3, 2, 3])).toBe(2);
  });
  it("[15, 0, 6, 10, 11, 2, 5] should be 20", () => {
    expect(loadGrain([15, 0, 6, 10, 11, 2, 5])).toBe(20);
  });
  it("[28, 37, 36, 48, 32, 3, 6, 14, 45, 37, 33, 24, 2, 0, 26, 5, 8, 14, 39, 9, 18, 48, 41, 12, 43, 31, 17, 37, 38] should be 564", () => {
    expect(
      loadGrain([
        28, 37, 36, 48, 32, 3, 6, 14, 45, 37, 33, 24, 2, 0, 26, 5, 8, 14, 39, 9,
        18, 48, 41, 12, 43, 31, 17, 37, 38
      ])
    ).toBe(564);
  });
});
