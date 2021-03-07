export const fetchBreweries = (input) => {
  return fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
  .then((response) => response.json())
}

export const fetchJoke = () => {
  return fetch('https://icanhazdadjoke.com/', {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "BrewTalk (https://github.com/tashiad/brewtalk)"
    }
  })
  .then((response) =>  response.json())
}
