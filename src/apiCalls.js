export const fetchBreweries = (input) => {
  return fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
  .then((response) => {
    if(!response.ok) {
      throw Error(`Unable to find breweries. Please refresh the page or try again later.`)
    }
    return response.json()
  })
}

export const fetchJoke = () => {
  return fetch('https://icanhazdadjoke.com/', {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "BrewTalk (https://github.com/tashiad/brewtalk)"
    }
  })
  .then((response) => {
    if(!response.ok) {
      throw Error('Unable to find a dad joke. Please refresh the page or try again later.')
    }
    return response.json()
  })
}
