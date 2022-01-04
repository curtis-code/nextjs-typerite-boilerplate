describe('Post', () => {
  before(() => {
    cy.visit('http://localhost:3000/');

    cy.wait(200);

    cy.waitUntil(() => cy.get('#preloader').should('not.be.visible'), {
      timeout: 20000,
    });

    cy.get('article.entry h2 a').first().as('firstPost');

    cy.get('@firstPost').invoke('text').as('firstPostTitle');

    cy.get('@firstPost').click();

    cy.waitUntil(() => cy.get('#preloader').should('be.visible'));
    cy.waitUntil(() => cy.get('#preloader').should('not.be.visible'), {
      timeout: 20000,
    });
  });

  it('should display post title', () => {
    cy.get('@firstPostTitle').then((firstPostTitle) => {
      cy.get('h1').should('have.text', firstPostTitle);
    });
  });
});
