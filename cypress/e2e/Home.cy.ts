describe('Home E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should return correct data from API', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'search');
  });
  it('search works', () => {
    cy.get('input').type('morty smith').should('have.value', 'morty smith');
    cy.contains('search').click();

    cy.intercept('GET', 'https://rickandmortyapi.com/api/character/?page=1&name=morty smith', {
      statusCode: 200,
      body: { success: true },
    }).as('getRequest');
  });
});
