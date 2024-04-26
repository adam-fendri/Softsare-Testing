import { expect, test } from "vitest";
import { add } from "../src/math";

test("Test de la fonction add", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
