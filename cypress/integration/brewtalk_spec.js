const baseUrl = 'http://localhost:3000'

describe('Homepage: Header', () => {

  it('Should have correct header and subheader', () => {
    cy
      .visit(baseUrl)
      .get('header')
      .get('h1').should('have.text', 'BrewTalk')
      .get('h2').should('have.text', 'Breweries + dad jokes for the introverted.')
  })

  it('Should have a nav bar', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').should('contain', 'Home')
      .get('li').should('contain', 'Favorites')
  })
})

describe('Homepage: Step 1', () => {
  it('Should render step 1 correctly before searching breweries', () => {
    cy
      .visit(baseUrl)
      .get('section')
      .get('.section-top')
      .get('.number:first').should('have.text', '1')
      .get('form')
      .get('label[for=search]').should('have.text', 'Select a brewery:')
      .get('div[class="searchBar"]').find('img[class="searchIcon"]').should('be.visible')
      .get('input[placeholder="Search by name or city"]')
  })

  it('Should be able to search by brewery name', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Crux', {fixture: 'breweries-name-fixture.json'})
      .visit(baseUrl)
      .get('input[class="searchBox"]').type('Crux').type('{enter}')
      .get('article').get('h3').should('contain', 'TEST Back Street Brewery & Tasting Room')
      .get('article').get('h3').should('not.contain', 'Deschutes Brewery')
  })

  it('Should be able to search by brewery city', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {fixture: 'breweries-city-fixture.json'})
      .visit(baseUrl)
      .get('input[class="searchBox"]').type('Bend').type('{enter}')
      .get('article').get('h3').should('contain', 'TEST 10 Barrel Brewing Co')
      .get('article').get('h3').should('not.contain', 'Denver Beer Co')
  })

  it('Should be able to select a brewery', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {fixture: 'breweries-city-fixture.json'})
      .visit(baseUrl)
      .get('input[class="searchBox"]').type('Bend').type('{enter}')
      .get('article:first').contains('button', 'Select').click()
      .get('article[class="selectedCard"]')
  })

  it('Should be able to unselect a brewery', () => {
    cy
      .intercept('https://api.openbrewerydb.org/breweries/search?query=Bend', {fixture: 'breweries-city-fixture.json'})
      .visit(baseUrl)
      .get('input[class="searchBox"]').type('Bend').type('{enter}')
      .get('article:first').contains('button', 'Select').click()
      .get('article[class="selectedCard"]')
      .get('article:first').contains('button', 'Un-Select').click()
      .get('article:first').get('.selectedCard').should('not.exist')
  })
})

describe('Homepage: Step 2', () => {


})

describe('Homepage: Step 3', () => {


})

describe('Favorites Page', () => {

})
