describe("Contact form", () => {
  it("successfully renders", () => {
    cy.visit("/");
    cy.get("[data-cy=button]")
      .should("contain", "contact.")
      .click({ multiple: true });
    cy.get("[data-cy=name]").should(
      "contain",
      "As you have probably guessed my name's Alex, what's yours?"
    );
    cy.get("[data-cy=email]").should("contain", "And your email?");
    cy.get("[data-cy=message]").should(
      "contain",
      "Drop me a message, even if it's just for some friendly advice"
    );
  });
});