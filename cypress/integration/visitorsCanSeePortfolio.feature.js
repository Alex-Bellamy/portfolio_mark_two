describe('Portfolio renders', () => {
  it('successfully', () => {
    cy.visit('/');
    cy.get('projects.').should('be.visible');
    cy.get('about.').should('be.visible');
    cy.get('contact.').should('be.visible');
    cy.get('#footer').should('contain', 'Brought to life with React')
  })
})