describe('Projects', () => {
  it('successfully render', () => {
    cy.visit('/');
    cy.get("#projectOne").should("exist");
    cy.get("#projectTwo").should("exist");
    cy.get("#projectThree").should("exist");
    cy.get("#otherProjects").should("exist");
  })
})