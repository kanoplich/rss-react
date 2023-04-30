describe('Form E2E', () => {
  beforeEach(() => {
    cy.visit('/form');
  });
  it('form page renders', () => {
    cy.get('form').should('be.visible');
    cy.get('.title').should('have.text', 'No card');
  });
  it('form card add', () => {
    cy.get('#name').type('Test');
    cy.get('#birthday').type('2009-12-12');
    cy.get('#country').select('other country');
    cy.get('[type="radio"]').first().check();
    cy.get('#image').selectFile('cypress/fixtures/test.jpg');
    cy.get('[type="checkbox"]').check();
    cy.get('form').submit();

    cy.get('.title').should('have.text', 'Card created successfully');
    cy.get('.card__form').should('have.length', 1);
  });
  it('form card not add', () => {
    cy.get('#name').type('test');
    cy.get('#birthday').type('2200-12-12');
    cy.get('form').submit();

    cy.get('.title').should('have.text', 'No card');
  });
});
