// test for registration (can fill in sample user details)

describe("visitng the register page", () => {
  //=================== successful case =======================
  it("passes", () => {
    cy.visit("/register");
    cy.get('[name="name"]').type("sampleuser2");
    cy.get('[name="username"]').type("sampleusername2");
    cy.get('[name="email"]').type("sample2@gmail.com");
    cy.get('[name="password"]').type("sampleuser2");
    cy.contains("Register").should("be.enabled").click();
  });

  //=================== failure case =======================
  it("user with invalid email will not be able to register", () => {
    cy.visit("/register");
    cy.get('[name="name"]').type("sampleuser2");
    cy.get('[name="username"]').type("sampleusername2");
    cy.get('[name="email"]').type("sample2");
    cy.get('[name="password"]').type("sampleuser2");
    cy.contains("Register").should("be.enabled").click();
  });

  it("user with invalid password will not be able to register", () => {
    cy.visit("/register");
    cy.get('[name="name"]').type("sampleuser2");
    cy.get('[name="username"]').type("sampleusername2");
    cy.get('[name="email"]').type("sample2@gmail.com");
    cy.get('[name="password"]').type("sample");
    cy.contains("Register").should("be.enabled").click();
  });
});
