import "./App.css";

const App = () => {
  function loadGrain(levels) {
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
    </section>
  );
};

export default App;
