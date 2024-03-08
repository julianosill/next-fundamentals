describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it the cart', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not add same product twice', () => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to cart', () => {
    cy.get('input[name=q]').type('mole').parent('form').submit()

    cy.get('a[href^="/product"]').first().click()
    cy.location('pathname').should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Cart (1)').should('exist')
  })
})
