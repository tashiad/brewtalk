const baseUrl = 'http://localhost:3000'

describe('Homepage: Step 2', () => {
  it('Should render step 2 correctly before fetching a dad joke', () => {
    cy
      .visit(baseUrl)
      .get('.number').eq(1).should('have.text', '2')
      .get('.steps-section').eq(1).should('contain', 'Find a dad joke:')
      .get('button[name="getJoke"]').should('have.text', 'Generate dad joke')
  })

  it('Should render a random dad joke when button is clicked', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('.number').eq(1).should('have.text', '2')
      .get('.steps-section').eq(1).should('contain', 'Find a dad joke:')
      .get('button[name="getJoke"]').click()
      .get('.card-contents').should('have.text', 'TEST: My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.')
  })

  it('Should display an error message when the server returns a 400 error', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {statusCode: 400})
      .visit(baseUrl)
      .get('button[name="getJoke"]').click()
      .get('section').eq(1)
      .should('contain', 'Unable to find a dad joke. Please refresh the page or try again later.')
  })

  it('Should display an error message when the server returns a 500 error', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {statusCode: 500})
      .visit(baseUrl)
      .get('button[name="getJoke"]').click()
      .get('section').eq(1)
      .should('contain', 'Unable to find a dad joke. Please refresh the page or try again later.')
  })
})
