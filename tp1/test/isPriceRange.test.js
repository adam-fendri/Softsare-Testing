import { test, expect } from "vitest";
import { isPriceInRange } from "../src/isPriceInRange";

test("Test de la fonction isPriceInRange pour un prix dans la plage", () => {
  // Le prix est dans la plage spécifiée
  expect(isPriceInRange(10, 5, 15)).toBeTruthy();
});

test("Test de la fonction isPriceInRange pour un prix à la limite inférieure", () => {
  // Le prix est à la limite inférieure de la plage
  expect(isPriceInRange(5, 5, 15)).toBeTruthy();
});

test("Test de la fonction isPriceInRange pour un prix à la limite supérieure", () => {
  // Le prix est à la limite supérieure de la plage
  expect(isPriceInRange(15, 5, 15)).toBe(true);
});

test("Test de la fonction isPriceInRange pour un prix en dehors de la plage (inférieur)", () => {
  // Le prix est en dehors de la plage (inférieur à la limite inférieure)
  expect(isPriceInRange(4, 5, 15)).toBeFalsy();
});

test("Test de la fonction isPriceInRange pour un prix en dehors de la plage (supérieur)", () => {
  // Le prix est en dehors de la plage (supérieur à la limite supérieure)
  expect(isPriceInRange(16, 5, 15)).toBeFalsy();
});

test("Test de la fonction isPriceInRange pour un prix en dehors de la plage (négatif)", () => {
  // Le prix est en dehors de la plage (plage spécifiée est positive)
  expect(isPriceInRange(-5, 0, 10)).toBe(false);
});

test("Test de la fonction isPriceInRange pour une plage inversée (min > max)", () => {
  // Le prix est en dehors de la plage (min > max)
  expect(isPriceInRange(5, 15, 5)).toBe(false);
});
