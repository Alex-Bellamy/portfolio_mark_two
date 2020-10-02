describe("Visitor can see social media links", () => {
  it("in contact section", () => {
    cy.get("#linkedin-icon").should("exist")
    cy.get("#github-icon").should("exist");
  })
});