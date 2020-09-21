describe('Footer section', () => {
  it('successfully renders', () => {
    cy.visit('/');
    cy.get ("#cinnamonroll-icon").should("exist");
    cy.get('[data-cy=content]').should("contain", "brought to life with React & created by Alex Bellamy: Copyright ©2020")
  })
})