import { test, expect } from "vitest";
import { fetchRandomUser } from "../src/randomUser";

test("Test de la fonction fetchRandomUser", async () => {
  try {
    // Appeler la fonction fetchRandomUser pour récupérer les données de l'utilisateur
    const userData = await fetchRandomUser();

    // Assertion pour vérifier que les données renvoyées sont un objet JSON
    expect(typeof userData).toBe("object");

    // Assertion pour vérifier que les données renvoyées contiennent les informations sur l'utilisateur
    expect(userData).toHaveProperty("name");
    expect(userData).toHaveProperty("email");
    expect(userData).toHaveProperty("gender");
    expect(userData).toHaveProperty("location");
    // Ajoutez d'autres assertions en fonction des informations attendues sur l'utilisateur
  } catch (error) {
    // Si une erreur se produit pendant l'exécution du test
    // On signale le test comme échoué
    fail(
      "Une erreur s'est produite lors de l'exécution du test : " + error.message
    );
    expect(error.message).toBe("Failed to fetch random user");
  
  }
});
