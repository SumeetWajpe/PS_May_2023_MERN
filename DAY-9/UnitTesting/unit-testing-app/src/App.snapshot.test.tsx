import renderer from "react-test-renderer";
import App from "./App";
test("renders the app component correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
