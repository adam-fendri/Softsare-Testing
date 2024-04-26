export function trier(tab) {
  if (!tab.every((elem) => typeof elem === "number")) {
    throw new Error("Le tableau contient des éléments non numériques");
  }
  return tab.sort((a, b) => a - b);
}
