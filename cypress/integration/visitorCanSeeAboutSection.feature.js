describe('About section', () => {
  it('successfully renders', () => {
    cy.visit('/');
    cy.get('[data-cy=title]').should("contain", "about.");
    cy.get('[data-cy=content]').should("contain", "A full stack software developer turning bold ideas into reality and striving for that extra mile. Originally from London, a konkursförvaltare (business recovery and insolvency specialist) and property developer, it was time to change direction and pursue my dream of bringing applications to life. Through intensive real life simulated situations, hundreds of hours of grit and determination I have built skills in some of today’s most in demand technologies including React & React Native, NodeJS as well as Ruby on Rails. Check out my projects, if you like what you see or simply want some friendly advice don’t hesitate to contact me.")
  })
})