import { expect, test } from "vitest";
import { transformer } from "../src/transformer";

test("Transformation of empty string", () => {
  expect(transformer("")).toBe("");
  expect(transformer("")).toEqual("");
});

test("Transformation of string with lowercase characters", () => {
  expect(transformer("hello")).toBe("HELLO");
  expect(transformer("hello")).toEqual("HELLO");
});

test("Transformation of string with special characters", () => {
  expect(transformer("!@#$%")).toBe("!@#$%");
  expect(transformer("!@#$%")).toEqual("!@#$%");
});
