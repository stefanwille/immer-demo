const produce = require("immer").default;

describe("immer.produce", () => {
  const oldState = {
    a: 1,
    b: [4, 5, 6]
  };
  const newState = produce(oldState, draftState => {
    draftState.a = 2;
    draftState.b[1] = 9;
  });

  it("returns a new state based on the old state and a modified draft state", () => {
    const expectedState = {
      a: 2,
      b: [4, 9, 6]
    };
    expect(newState).toEqual(expectedState);
  });

  it("leaves the old state unmodified", () => {
    const expectedState = {
      a: 1,
      b: [4, 5, 6]
    };
    expect(oldState).toEqual(expectedState);
  });
});
