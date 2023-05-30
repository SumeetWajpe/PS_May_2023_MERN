import React from "react";
import App, { CounterState } from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("test suite for counter", () => {
  it("tests if counter is zero", () => {
    let appInstance = shallow(<App />);
    let state = appInstance.state() as CounterState;
    expect(state.count).toBe(10);
  });
});
