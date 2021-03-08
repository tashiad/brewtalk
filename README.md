# BrewTalk
###### For introverted craft beer lovers who need help being social again in a post-COVID world.
---
## Table of Contents
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Deployment](#Deployment)
* [Features](#Features)
* [Author](#Author)

## Introduction
It’s been a year since the COVID pandemic changed the world as we knew it. In terms of our social lives, we all stayed home a lot more, which was generally good news for us introverts—at first. Now, as more and more people are getting vaccinated, it’ll soon be time to emerge from our homes and venture out into the light.

With BrewTalk, craft beer-lovers can search for a brewery to visit IRL by name or city and view results from the [Open Brewery DB API](https://www.openbrewerydb.org/). Then, they can generate and save dad jokes from the [Random Dad Joke API](https://icanhazdadjoke.com/) and come prepared with a G-rated, crowd-pleasing dad joke to help ease them back into having a social life in person again. Finally, they can get directions to their selected brewery in Google Maps with the [Google Maps API](https://developers.google.com/maps/documentation/urls/get-started). The project specifications can be found [here](https://frontend.turing.io/projects/module-3/niche-audience.html).

### Motivation & Goals
* Demonstrate mastery of: React, Router, Asynchronous JavaScript, & End to end testing with Cypress
* Work within constraints to deliver a product for a niche audience, which helps solve a problem unique to them.
* Create personas and user stories to describe a target audience.

---

## Technologies
JavaScript, React, React Router, RESTful APIs, Cypress, Local Storage, HTML, CSS

---

## Deployment
[Deployment Link](https://brewtalk.vercel.app/)

**To run locally:**
1. Clone down this repo
2. `npm install`
3. `npm run start`

---

## Features
* [Search Breweries](#Search-Breweries)
* [Generate A Random Dad Joke](#Generate-A-Random-Dad-Joke)
* [Save A Dad Joke](#Save-A-Dad-Joke)
* [Get Directions](#Get-Directions)


#### Search Breweries
When the site loads, the you'll see a form with options to get info for your current location or to choose a location from a dropdown list of available cities and states. If you click "Nearest Location," a card will show up and persist on refresh with the latest data so you can stay up to date with the AQI and weather for where you are.
<p align = "center">
<img width="1440" alt="Homepage" src="https://user-images.githubusercontent.com/66852774/110394193-3f5ce880-8029-11eb-8ca0-e24f2f00a535.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    The current location card data comes from our <code>fetch</code> to the AirVisual API IP geolocation endpoint. Conditional rendering in Vue.js allowed us to include "Current Location" copy at the top of the card without the delete button. We used <code>unshift</code> to ensure that the current location card always shows up first in the render even as other location cards are added. Once a current location card has been added from the form, it is also added to <code>localStorage</code> and will show up on refresh with data from the latest timestamp.
  </details>

#### Generate A Random Dad Joke
To see what the AQI and weather looks like in other areas, you can choose supported cities and states from the dropdown menus in the form. Once a new location has been added, it's automatically saved so that you can come back to it later on. You can also delete a location if you no longer want to view it. Each card can be individually refreshed to view the latest weather and AQI data.
<p align = "center">
<img width="1440" alt="Generate a dad joke" src="https://user-images.githubusercontent.com/66852774/110394334-82b75700-8029-11eb-9d74-37f9a92d3b65.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    On load, the state form dropdown menu is populated with a <code>fetch</code> to AirVisual's "List supported states in a country" endpoint. Once a state has been selected, the cities dropdown is populated with a <code>fetch</code> to AirVisual's "List supported cities in a state" endpoint for the selected state. On submit, another <code>fetch</code> to their "Get specified city data" endpoint interpolating both state and city dropdown values provides the data needed to render a new card for that location. Error handling was used to disable the cities dropdown and submit button until the form has met certain conditions, and to display a server error message to the UI when the calls/minute limit has been reached. Locations are saved to <code>localStorage</code> and can also be deleted.
  </details>

#### Save A Dad Joke
To make the app directly relevant to our active/outdoorsy target audience, messages are displayed with specific recommendations for outdoor activity based on a location's given AQI and what [AirNow.gov](https://www.airnow.gov/) suggests is safe.
<p align = "center">
<img width="1440" alt="Saved dad jokes" src="https://user-images.githubusercontent.com/66852774/110394421-a7abca00-8029-11eb-9252-fb996220b46c.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    Conditional rendering in Vue.js allowed us to render colors, recommendation messages, and more based on where a location's AQI falls within a range of numbers on the scale.
  </details>

#### Get Directions
Taking the activity recommendations a step further, we added a button to each location card that sends users to the trails page for that location on AllTrails.
<p align = "center">
<img width="1440" alt="Get Directions" src="https://user-images.githubusercontent.com/66852774/110394481-be522100-8029-11eb-87f9-77b14bb77b52.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    By formatting the city and state inputs from the form to match the AllTrails URL format, we were able to interpolate the link for each individual card so that the user lands on that particular location page.
  </details>

### Accessibility
This app was built with all users in mind. I used Lighthouse and [WAVE](https://wave.webaim.org/) to work towards including as broad of an audience as I could. Of course, as I am committed to including all users, I am ready to make future edits to address any areas that I may have missed.

### Future Improvements
-

---

## Author
<table>
    <tr>
        <td> Tashia Davis <a href="https://github.com/tashiad">GH</td>
    </tr>
 <td><img src="https://avatars3.githubusercontent.com/u/66852774?s=400&v=4" alt="Ms. Davis"
 width="150" height="auto" /></td>
</table>
