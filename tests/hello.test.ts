import { hello } from "../src";

test("adds two numbers correctly", () => {
  const result = hello("Zhiwei");
  expect(result).toBe("Hello, Zhiwei!");
});
