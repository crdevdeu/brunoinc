describe('cat-connect', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('brunoinc-root').should('exist');
  });
});
