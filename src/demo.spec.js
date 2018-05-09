const produce = require("immer").default;

describe("immer.produce", () => {
  const oldState = {
    a: "old",
    b: [4, 5, 6]
  };
  const newState = produce(oldState, draftState => {
    draftState.a = "new";
    draftState.b[1] = 999;
  });

  it("returns a new state based on the old state and a modified draft state", () => {
    const expectedState = {
      a: "new",
      b: [4, 999, 6]
    };
    expect(newState).toEqual(expectedState);
  });

  it("leaves the old state unmodified", () => {
    const expectedState = {
      a: "old",
      b: [4, 5, 6]
    };
    expect(oldState).toEqual(expectedState);
  });
});
