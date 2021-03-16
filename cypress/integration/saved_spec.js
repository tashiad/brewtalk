const baseUrl = 'http://localhost:3000'
const savedUrl = 'http://localhost:3000/saved'

describe('Saved Jokes Page', () => {
  it('Should be able to visit it from the home page', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').eq(2).click()
      .url().should('include', savedUrl)
  })

  it('Should render correctly without any saved jokes upon initial visit', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').eq(2).click()
      .url().should('include', savedUrl)
      .get('h2').should('contain', 'Your Saved Dad Jokes')
      .get('p').should('have.text', 'No saved jokes yet. Go back to add some!')
  })

  it('Should be able to go back to the homepage once visited', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').eq(2).click()
      .url().should('include', savedUrl)
      .get('li').eq(0).click()
      .url().should('include', baseUrl)
  })

  it('Should be able to save a joke to the Saved Jokes page', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('button[name="getJoke"]').click()
      .get('button[name="saveJoke"]').click()
      .get('li').eq(2).click()
      .get('p[class="card-contents"]').should('have.text', 'TEST: My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.')
  })

  it('Should not be able to save duplicate jokes', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('button[name="getJoke"]').click()
      .get('button[name="saveJoke"]').click()
      .get('button[name="saveJoke"]').should('have.text', 'Saved')
      .get('button[class="button-primary button-card disabled"]')
  })

  it('Should be able to remove a joke from saved', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('button[name="getJoke"]').click()
      .get('button[name="saveJoke"]').click()
      .get('li').eq(2).click()
      .get('button[name="remove"]').click()
      .get('p').should('have.text', 'No saved jokes yet. Go back to add some!')
      .get('li').eq(0).click()
      .get('button[name="saveJoke"]').should('have.text', 'Save')
  })
})
