describe('Homepage', () => {
  it.skip('Should have correct header and subheader', () => {
    cy
      .visit('http://localhost:3000')
      .get('header').contains('h1', 'GrossVeggies')
      .get('header').contains('h2', 'Movie ratings and more.')
  })

  it.skip('Should show movie data on page load', () => {
    cy
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'mock-movie-data.json'})
      .visit('http://localhost:3000')
      .get('.poster-title').contains('Test 1')
      .get('.poster-img').should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
      .get('.poster-rating').contains('6.7/10')
  })

  it.skip('Should show an error message for a server side error for all movies API', () => {
    cy
      .intercept({
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      },
      {
        statusCode: 500
      })
      .visit('http://localhost:3000')
      .get('.error-message').contains('h2', 'Unable to find movies.')
  })

  it.skip('Should be able to search by movie title', () => {
    cy
      .visit('http://localhost:3000')
      .get('.input-field').type('war')
      .get('.search-button').click()
      .get('.poster:first').contains('h2', 'Onward')
      .get('.poster').should('not.contain', 'Mulan')
  })

  it.skip('Should be able to filter by minimum movie rating', () => {
    cy
      .visit('http://localhost:3000')
      .get('.input-field').type('6')
      .get('.search-button').click()
      .get('.poster').should('not.contain', 'Mulan')
  })
})

describe('Favorites Page', () => {
  it.skip('Should be able to click on a movie poster', () => {
    cy
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {fixture: 'trailer-data.json'})
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {fixture: 'single-movie-data.json'})
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'mock-movie-data.json'})
      .visit('http://localhost:3000')
      .get('.poster:first').click()
      .url().should('include', '/movie/694919')
      .get('.movie-title').contains('Test 1')
      .get('.trailer').contains('Trailer')
  })

  it.skip('Should show an error message for a server side error for single movie API', () => {
    cy
      .intercept({
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
      },
      {
        statusCode: 500
      })
      .visit('http://localhost:3000/movie/694919')
      .get('h2').contains('Unable to find movie.')
  })

  it.skip('Should show an error message for a nonexistent movie id', () => {
    cy
      .intercept({
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/5',
      },
      {
        statusCode: 404
      })
      .visit('http://localhost:3000/movie/5')
      .get('h2').contains('Unable to find movie.')
  })

  it.skip('Should have a funtional back button from the movie details page', () => {
    cy
      .visit('http://localhost:3000/movie/694919')
      .get('.back-button').click()
      .get('header').contains('h2', 'Movie ratings and more.')
  })
})
