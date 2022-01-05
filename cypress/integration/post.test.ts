describe('Post', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');

    cy.wait(200);

    cy.waitUntil(() => cy.get('#preloader').should('not.be.visible'), {
      timeout: 20000,
    });

    cy.get('article.entry h2 a').first().as('firstPost');

    cy.get('@firstPost').invoke('text').as('postTitle');

    cy.get('@firstPost').click();

    cy.waitUntil(() => cy.get('#preloader').should('be.visible'));
    cy.waitUntil(() => cy.get('#preloader').should('not.be.visible'), {
      timeout: 20000,
    });
  });

  it('should display post title', () => {
    cy.get('@postTitle').then((postTitle) => {
      cy.get('h1').should('have.text', postTitle);
    });
  });

  it('should contain post title in page title', () => {
    cy.get('@postTitle').then((postTitle) => {
      cy.title().should('contain', postTitle);
    });
  });
});
