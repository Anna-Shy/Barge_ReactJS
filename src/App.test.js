import { render } from "@testing-library/react";
import App from "./App";

const loadGrain = (levels) => {
  let count = 0;

  if (levels.length >= 3) {
    for (let i = 0; i < levels.length; i++) {
      if (levels[i] === 0) {
        count += levels[i - 1];
      }

      if (levels[i] > levels[i + 1] && levels[i + 1] < levels[i + 2]) {
        if (levels[i + 2] < levels[i]) {
          count += levels[i + 2] - levels[i + 1];
        } else {
          count += levels[i] - levels[i + 1];
        }
      }
    }
    return count;
  }

  return 0;
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
});
