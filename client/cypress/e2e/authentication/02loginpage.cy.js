describe("The Login Page", () => {
  // ===================== successful case =======================
  it("user that is verified will be able to login", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("funlanguage111111@gmail.com");
    cy.get("input[name=password]").type("11111111");
    cy.contains("Login").should("be.enabled").click();
  });
  // ===================== failure case =======================
  it("user that is not verified will not be able to login", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("sample@gmail.com");
    cy.get("input[name=password]").type("12345678");
    cy.contains("Login").should("be.enabled").click();
  });

  it("user that is not registered will not be able to login", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("99999@gmail.com");
    cy.get("input[name=password]").type("12345678");
    cy.contains("Login").should("be.enabled").click();
  });

  it("user with wrong password will not be able to log in", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("funlanguage111111@gmail.com");
    cy.get("input[name=password]").type("12345678");
    cy.contains("Login").should("be.enabled").click();
  });

  it("user with invalid email will not be able to log in", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("funlanguage111111");
    cy.get("input[name=password]").type("11111111");
    cy.contains("Login").should("be.enabled").click();
  });

  it("user with invalid input will not be able to log in", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("");
    cy.get("input[name=password]").type("");
    cy.contains("Login").should("be.enabled").click();
  });
});
