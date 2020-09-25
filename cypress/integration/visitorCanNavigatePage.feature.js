describe("Visitor can navigate page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("to projects section", () => {
    cy.get("[data-cy=button]").should("contain", "projects.").click({ multiple: true });
    cy.get("[data-cy=title]").should("contain", "projects.");
    cy.contains("#about.").should("not.be.visible");
    cy.contains("#aboutContent").should("not.be.visible");
    cy.contains("#contact.").should("not.be.visible");
  });

  it("to about section", () => {
    cy.get("[data-cy=button]").should("contain", "about.").click({ multiple: true });
    cy.get("[data-cy=title]").should("contain", "about.");
    cy.contains("A full stack software developer turning bold ideas into reality and striving for that extra mile. Originally from London, a konkursförvaltare (business recovery and insolvency specialist) and property developer, it was time to change direction and pursue my dream of bringing applications to life. Through intensive real life simulated situations, hundreds of hours of grit and determination I have built skills in some of today’s most in demand technologies including React & React Native, NodeJS as well as Ruby on Rails. Check out my projects, if you like what you see or simply want some friendly advice don’t hesitate to contact me.").should("be.visible");
    cy.contains("#projects.").should("not.be.visible");
    cy.contains("#contact.").should("not.be.visible");
  });

  it("to contact section", () => {
    cy.get("[data-cy=button]").should("contain", "contact.").click({ multiple: true });
    cy.get("[data-cy=title]").should("contain", "contact.");
    cy.contains("#projects.").should("not.be.visible");
    cy.contains("#about.").should("not.be.visible");
    cy.contains("#aboutContent").should("not.be.visible");
  });
});