describe("The whole process of a registered and verified user", () => {
  // ===================== successful case =======================
  it("user that is verified will be able to login,check profile and achievement details then signout", () => {
    cy.visit("/login");
    cy.get("input[name=email]").type("funlanguage111111@gmail.com");
    cy.get("input[name=password]").type("11111111");
    cy.contains("Login").should("be.enabled").click();
    cy.wait(10000);
    cy.contains("View Profile").click();
    // ===================== user can view achievements =======================
    cy.contains("View Achievements").click();
    cy.wait(10000);
    cy.contains("Return to Profile").click();
    // ===================== user can edit profile =======================
    //cy.get('[name="name"]').type("fun");
    //cy.get('[name="username"]').type("funLanguage");
    //cy.get('[name="Current Email"]').type("funlanguage111111@gmail.com");
    //cy.get('[name="New Email"]').type("funlanguage111111@gmail.com");
    //cy.get('[name="password"]').type("11111111");
    //cy.contains("update").should("be.enabled").click();
    //==================== after using the app, user can sign out =======================
    cy.contains("Return").click();
    cy.contains("Sign Out").click();
    cy.wait(5000);
  });
});
