// test for registration (can fill in sample user details)

describe("visitng the register page", () => {
  it("passes", () => {
    cy.visit("http://fun-language-5622-frontend-seven.vercel.app/register");
    cy.get('[name="name"]').type("sampleuser2")
    cy.get('[name="username"]').type("sampleusername2")
    cy.get('[name="email"]').type("sample2@gmail.com")
    cy.get('[name="password"]').type("sampleuser2")
    cy.contains("Register").should("be.enabled").click()
  });
});
