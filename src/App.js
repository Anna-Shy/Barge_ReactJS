import "./App.css";

const App = () => {
  function loadGrain(levels) {
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
  }

  return (
    <section className="examples">
      <h2 className="title">Result of some examples</h2>
      <p>[4, 1, 3] = {loadGrain([4, 1, 3])}</p>
      <p>[2, 1, 5, 2, 7, 4, 10] = {loadGrain([2, 1, 5, 2, 7, 4, 10])}</p>
      <p>[2, 0, 1, 5, 2, 7] = {loadGrain([2, 0, 1, 5, 2, 7])}</p>
      <p>[2, 4, 2] = {loadGrain([2, 4, 2])}</p>
      <p>[7, 4] = {loadGrain([7, 4])}</p>
      <p>[] = {loadGrain([])}</p>
      <p>[4, 0, 1, 3] = {loadGrain([4, 0, 1, 3])}</p>
      <p>[3, 2, 3, 2, 3] = {loadGrain([3, 2, 3, 2, 3])}</p>
      <p>
        [ 28, 37, 36, 48, 32, 3, 6, 14, 45, 37, 33, 24, 2, 0, 26, 5, 8, 14, 39,
        9, 18, 48, 41, 12, 43, 31, 17, 37, 38] ={" "}
        {loadGrain([
          28, 37, 36, 48, 32, 3, 6, 14, 45, 37, 33, 24, 2, 0, 26, 5, 8, 14, 39,
          9, 18, 48, 41, 12, 43, 31, 17, 37, 38
        ])}
      </p>
      <p>[15, 0, 6, 10, 11, 2, 5] = {loadGrain([15, 0, 6, 10, 11, 2, 5])}</p>
      <p>[4, 0, 2, 7, 3, 6, 1] = {loadGrain([4, 0, 2, 7, 3, 6, 1])}</p>
    </section>
  );
};

export default App;
