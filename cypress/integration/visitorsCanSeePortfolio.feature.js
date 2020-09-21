describe('Portfolio renders', () => {
  it('successfully', () => {
    cy.visit('/');
    cy.get('[data-cy=title]').should("contain", "projects.");
    cy.get('[data-cy=title]').should("contain", "about.");
    cy.get('[data-cy=title]').should("contain", "contact.");
    cy.get('[data-cy=title]').should("contain", "alex bellamy :fullStack_webDeveloper")
    cy.get('[data-cy=content]').should("contain", "brought to life with React & created by Alex Bellamy: Copyright ©2020");
  })
})