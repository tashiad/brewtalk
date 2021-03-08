const baseUrl = 'http://localhost:3000'

describe('Homepage: Step 3', () => {
  it('Should render step 3 correctly on page load', () => {
    cy
      .visit(baseUrl)
      .get('.number').eq(2).should('have.text', '3')
      .get('.steps-section').eq(2).should('contain', 'Head out:')
      .get('button[name="directions"]').should('have.text', 'Get Directions')
  })

  it('Should not be able to click directions button if a brewery has not yet been selected', () => {
    cy
      .visit(baseUrl)
      .get('button[class="button-top disabled"]').click()
      .url().should('include', baseUrl)
  })

  it('Should be able to click directions button once a brewery has been selected', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {fixture: 'breweries-city-fixture.json'})
      .visit(baseUrl)
      .get('button[class="button-top disabled"]').click()
      .url().should('include', baseUrl)
      .get('input[class="search-box"]').type('Bend').type('{enter}')
      .get('article:first').contains('button', 'Select').click()
      .get('button[class="button-top disabled"]').should('not.exist')
  })

  it('Should display a message if a brewery has been selected and a joke has been saved', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {fixture: 'breweries-city-fixture.json'})
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('input[class="search-box"]').type('Bend').type('{enter}')
      .get('article:first').contains('button', 'Select').click()
      .get('button[name="getJoke"]').click()
      .get('button[name="saveJoke"]').click()
      .get('p').should('contain', 'Cheers! You\'re officially ready to be social.')
  })
})
