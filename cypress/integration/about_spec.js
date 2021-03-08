const baseUrl = 'http://localhost:3000'
const aboutUrl = 'http://localhost:3000/about'

describe('About Page', () => {
  it('Should be able to visit it from the home page', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').eq(1).click()
      .url().should('include', aboutUrl)
  })

  it('Should be able to go back to the homepage once visited', () => {
    cy
      .visit(baseUrl)
      .get('nav')
      .get('li').eq(1).click()
      .url().should('include', aboutUrl)
      .get('li').eq(0).click()
      .url().should('include', baseUrl)
  })

  it('Should have correct header and subheader', () => {
    cy
      .visit(aboutUrl)
      .get('h2').should('contain', 'About')
      .get('h3').should('contain', 'For introverted craft beer lovers who need help being social again in a post-COVID world.')
  })
})
