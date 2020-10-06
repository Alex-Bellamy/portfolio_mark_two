describe("Visitor can see social media links", () => {
  it("in the header", () => {
    cy.get("#linkedin-header-icon").should("exist");
    cy.get("#github-header-icon").should("exist");
  });

  it("in the contact section", () => {
    cy.get("#emailAddress").should("exist")
    cy.get("#linkedin-icon").should("exist");
    cy.get("#github-icon").should("exist");
  });
});