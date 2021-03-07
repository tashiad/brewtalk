const baseUrl = 'http://localhost:3000'
const favsUrl = 'http://localhost:3000/favorites'

describe('Favorites Page', () => {
  it('Should be able to visit it from the home page', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').eq(1).click()
      .url().should('include', favsUrl)
  })

  it('Should render correctly without any saved jokes upon initial visit', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').eq(1).click()
      .url().should('include', favsUrl)
      .get('section').contains('h2', 'Your Saved Dad Jokes')
      .get('section').contains('p', 'No favorites yet. Go back to add some!')
  })

  it('Should be able to go back to the homepage once visited', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').eq(1).click()
      .url().should('include', favsUrl)
      .get('li').eq(0).click()
      .url().should('include', baseUrl)
  })

  it('Should be able to save a joke to favorites', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('button[name="joke"]').click()
      .get('button[name="saveJoke"]').click()
      .get('li').eq(1).click()
      .get('p[class="cardContents"]').should('have.text', 'TEST: My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.')
  })

  it('Should not be able to save duplicate jokes', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('button[name="joke"]').click()
      .get('button[name="saveJoke"]').click()
      .get('button[name="saveJoke"]').should('have.text', 'Saved')
      .get('button[class="cardButton save button-secondary disabled"]')
  })

  it('Should be able to remove a joke from favorites', () => {
    cy
      .intercept('https://icanhazdadjoke.com/', {fixture: 'jokes-fixture.json'})
      .visit(baseUrl)
      .get('button[name="joke"]').click()
      .get('button[name="saveJoke"]').click()
      .get('li').eq(1).click()
      .get('button[name="remove"]').click()
      .get('p').should('have.text', 'No favorites yet. Go back to add some!')
      .get('li').eq(0).click()
      .get('button[name="saveJoke"]').should('have.text', 'Save')
  })
})
