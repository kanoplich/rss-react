describe('About E2E', () => {
  it('about page renders', () => {
    cy.visit('/about');

    cy.get('h2').should('have.text', 'About us page');
  });
});
