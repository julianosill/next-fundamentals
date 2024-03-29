describe('search product', () => {
  it('should be able to search for a product', () => {
    cy.searchByQuery('mole')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=mole')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should redirect to home when search query is empty', () => {
    cy.on('uncaught:exception', () => false)

    cy.visit('/search')
    cy.location('pathname').should('equal', '/')
  })
})
