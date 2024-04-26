import { test, expect } from "vitest";
import { trier } from "../src/trier";

test("Tri d'un tableau vide", (t) => {
  const result = trier([]);
  expect(result).toEqual([]);
});

test("Test de la fonction trier", () => {
  const result = trier([3, 2, 1]);
  expect(result).toEqual([1, 2, 3]);
});

test("Test de la fonction trier avec un tab deja trier", () => {
  const result = trier([1, 2, 3]);
  expect(result).toEqual([1, 2, 3]);
});

test("Test de la fonction trier avec des éléments non numériques", () => {
  // Pass an array with non-numeric elements
  const nonNumericArray = [1, 2, "3", 4, 5]; // Including a string element "3"

  // Assertion to verify that trier function throws an error
  expect(() => trier(nonNumericArray)).toThrowError(
    "Le tableau contient des éléments non numériques"
  );
});
