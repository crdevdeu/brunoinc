describe('cat-connect', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary'));

  it('should render the component', () => {
    cy.get('brunoinc-button').should('exist');
  });
});
