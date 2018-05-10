const produce = require("immer").default;

describe("immer#produce", () => {
  it("returns a new state based on the old state and a modified draft state", () => {
    const oldState = {
      a: "old",
      b: [4, 5, 6]
    };
    const newState = produce(oldState, draftState => {
      draftState.a = "new";
      draftState.b[1] = 999;
    });

    expect(newState).toEqual({
      a: "new",
      b: [4, 999, 6]
    });
  });

  it("leaves the old state unmodified", () => {
    const oldState = {
      a: "old",
      b: [4, 5, 6]
    };
    produce(oldState, draftState => {
      draftState.a = "new";
      draftState.b[1] = 999;
    });
    expect(oldState).toEqual({
      a: "old",
      b: [4, 5, 6]
    });
  });
});
