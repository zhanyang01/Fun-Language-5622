describe("The Login Page", () => {
  it("sign in valid users", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("sample@gmail.com");
    cy.get("input[name=password]").type("12345678");
    cy.contains("Login").should("be.enabled").click();
  });
});
