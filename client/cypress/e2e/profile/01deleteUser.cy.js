describe("process of user deleting an account", () => {
  it("user that is verified will be able to login, then signout", () => {
    cy.visit("/");
    cy.contains("Sign In").click();
    cy.get("input[name=email]").type("tan.eesean@gmail.com");
    cy.get("input[name=password]").type("Estan26*");
    cy.contains("Login").should("be.enabled").click();
    cy.wait(10000);
    cy.contains("View Profile").click();
    // ===================== user can delete account =======================
    // WRONG PROMPT(user will be asked to press y to delete account)
    cy.window().then(function (p) {
      //stubbing prompt window
      cy.stub(p, "prompt").returns("y");
      // click on Click for JS Prompt button
      cy.contains("Delete Account").click();
      // verify application message on clicking on OK
      cy.get("#result").should("have.text", "You entered: y");
    });
    cy.contains("ok").click();
    cy.wait(10000);

    // ===================== user can test the deleted account =======================
    cy.get("input[name=email]").type("tan.eesean@gmail.com");
    cy.get("input[name=password]").type("esTan26*");
    cy.contains("Login").should("be.enabled").click();
  });
});
