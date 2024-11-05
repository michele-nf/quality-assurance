describe('the-internet', () => {
  it('the h1 contains the correct text', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get('h1').contains('Welcome to the-internet')
  })
})