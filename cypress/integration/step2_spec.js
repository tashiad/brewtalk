const baseUrl = 'http://localhost:3000'

describe('Homepage: Step 2', () => {
  it('Should render step 2 correctly before fetching a dad joke', () => {
    cy
      .visit(baseUrl)
      .get('.number').eq(1).should('have.text', '2')
      .get('label').eq(1).should('have.text', 'Select a dad joke:')
      .get('button[name="joke"]').should('have.text', 'Generate a random dad joke')
  })

  it('Should render a random dad joke when button is clicked', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('.number').eq(1).should('have.text', '2')
      .get('label').eq(1).should('have.text', 'Select a dad joke:')
      .get('button[name="joke"]').click()
      .get('.cardContents').should('have.text', 'TEST: My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.')
  })

  it('Should be able to select a dad joke', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('button[name="joke"]').click()
      .get('button[name="selectJoke"]').should('have.text', 'Select').click()
      .get('article[class="selectedJoke"]')
      .get('button[name="selectJoke"]').should('have.text', 'Un-Select')
  })

  it('Should be able to unselect a dad joke', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('button[name="joke"]').click()
      .get('button[name="selectJoke"]').should('have.text', 'Select').click()
      .get('article[class="selectedJoke"]')
      .get('button[name="selectJoke"]').should('have.text', 'Un-Select').click()
      .get('article[class="selectedJoke"]').should('not.exist')
  })

  it.skip('Should display an error message when the server returns a 400 error', () => {
    cy.intercept('GET', statesAPI, { statusCode: 404 })
      .visit(baseUrl)
      .get('.error-message').should('have.text', 'Please wait a minute and refresh the page. Something went wrong with the server.')
  })

  it.skip('Should display an error message when the server returns a 500 error', () => {
    cy.intercept('GET', statesAPI, { statusCode: 500 })
      .visit(baseUrl)
      .get('.error-message').should('have.text', 'Please wait a minute and refresh the page. Something went wrong with the server.')
  })
})
