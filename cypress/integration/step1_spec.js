const baseUrl = 'http://localhost:3000'

describe('Homepage: Step 1', () => {
  it('Should render step 1 correctly before searching breweries', () => {
    cy
      .visit(baseUrl)
      .get('section')
      .get('.section-top')
      .get('.number:first').should('have.text', '1')
      .get('form')
      .get('label[for=search]').should('have.text', 'Select a brewery:')
      .get('div[class="search-bar"]').find('img[class="search-icon"]').should('be.visible')
      .get('input[placeholder="Search by name or city"]')
  })

  it('Should be able to search by brewery name', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Crux', {fixture: 'breweries-name-fixture.json'})
      .visit(baseUrl)
      .get('input[class="search-box"]').type('Crux').type('{enter}')
      .get('article').get('h3').should('contain', 'TEST Back Street Brewery & Tasting Room')
      .get('article').get('h3').should('not.contain', 'Deschutes Brewery')
  })

  it('Should be able to search by brewery city', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {fixture: 'breweries-city-fixture.json'})
      .visit(baseUrl)
      .get('input[class="search-box"]').type('Bend').type('{enter}')
      .get('article').get('h3').should('contain', 'TEST 10 Barrel Brewing Co')
      .get('article').get('h3').should('not.contain', 'Denver Beer Co')
  })

  it('Should be able to select a brewery', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {fixture: 'breweries-city-fixture.json'})
      .visit(baseUrl)
      .get('input[class="search-box"]').type('Bend').type('{enter}')
      .get('article:first').contains('button', 'Select').click()
      .get('article[class="brewery-card selected-card"]')
  })

  it('Should be able to unselect a brewery', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {fixture: 'breweries-city-fixture.json'})
      .visit(baseUrl)
      .get('input[class="search-box"]').type('Bend').type('{enter}')
      .get('article:first').contains('button', 'Select').click()
      .get('article[class="brewery-card selected-card"]')
      .get('article:first').contains('button', 'Undo').click()
      .get('article:first').get('.selected-card').should('not.exist')
  })

  it('Should display an error message when the server returns a 400 error', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {statusCode: 404})
      .visit(baseUrl)
      .get('input[class="search-box"]').type('Bend').type('{enter}')
      .get('.steps-section')
      .should('contain', 'Unable to find breweries. Please refresh the page or try again later.')
  })

  it('Should display an error message when the server returns a 500 error', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {statusCode: 500})
      .visit(baseUrl)
      .get('input[class="search-box"]').type('Bend').type('{enter}')
      .get('.steps-section')
      .should('contain', 'Unable to find breweries. Please refresh the page or try again later.')
  })

  it('Should display a message if the search input returns nothing from the breweries API', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=dsvkbhaj')
      .visit(baseUrl)
      .get('input[class="search-box"]').type('dsvkbhaj').type('{enter}')
      .get('.steps-section')
      .should('contain', 'No breweries match your search.')
  })
})
