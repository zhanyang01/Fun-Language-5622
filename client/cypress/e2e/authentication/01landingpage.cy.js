
describe("visitng the landing page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("allows users to sign in", () => {
    cy.visit("/");
    cy.contains("Sign In").click();
  });

  it("allows users to register", () => {
    cy.visit("/");
    cy.contains("Sign Up").click();
  });
});
