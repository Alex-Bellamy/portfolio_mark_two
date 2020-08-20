describe('Portfolio renders', () => {
  it('successfully', () => {
    cy.visit('/');
    cy.contains('projects.').should('be.visible');
    cy.contains('about.').should('be.visible');
    cy.contains('contact.').should('be.visible');
    cy.get('#footer').should('contain', 'Brought to life with React')
  })
})