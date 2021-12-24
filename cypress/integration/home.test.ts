describe('Home', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should load logo link', () => {
    cy.get('.site-logo')
      .should('have.attr', 'href')
      .and('include', '/');
  });

  it('should have theme credit', () => {
    cy.get('footer')
      .contains('StyleShout')
      .should('have.attr', 'href')
      .and('include', 'https://www.styleshout.com/');
  });
});
