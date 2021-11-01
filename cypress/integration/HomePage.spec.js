context("HomePage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should go to contact page when contact link is clicked", () => {
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("#contact-us-link").click();
    cy.url().should("include", "contact");
  });

  it("should go to login page when contact link is clicked", () => {
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("#login-link").click();
    cy.url().should("include", "login");
  });
});
