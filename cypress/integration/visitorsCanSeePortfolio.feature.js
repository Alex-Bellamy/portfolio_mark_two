describe('Portfolio renders', () => {
  it('successfully', () => {
    cy.visit('/');
    cy.get('[data-cy=title]').should("contain", "projects.");
    cy.get('[data-cy=title]').should("contain", "about.");
    cy.get('[data-cy=title]').should("contain", "contact.");
    cy.get('[data-cy=footer]').should("contain", "Brought to life with React");
  })
})