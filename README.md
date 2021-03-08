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
Search for a brewery directly by name or browse breweries by city. Click "Select" to commit to going to that brewery, which will allow you to get directions to it in Step 3. If you're afraid of commitment (or if you simply change your mind), you can unselect the brewery to go back to the search results, or start a new search.
<p align = "center">
<img width="1440" alt="Homepage" src="https://user-images.githubusercontent.com/66852774/110394193-3f5ce880-8029-11eb-8ca0-e24f2f00a535.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    On <code>enter</code>, a <code>fetch</code> is made to the Open Brewery DB API search endpoint. Individual brewery cards are rendered with the data received.
  </details>

#### Generate A Random Dad Joke
Click the "Generate dad joke" button to generate a random dad joke. If you want to find another dad joke, simply click the "Generate dad joke" button again.
<p align = "center">
<img width="1440" alt="Generate a dad joke" src="https://user-images.githubusercontent.com/66852774/110394334-82b75700-8029-11eb-9d74-37f9a92d3b65.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    On <code>click</code>, a <code>fetch</code> is made to the Dad Jokes API random joke endpoint. A joke card is rendered with the data received.
  </details>

#### Save A Dad Joke
 If you like a joke, you can click save to add it to your saved jokes. You can visit the Saved Jokes page to view all your saved dad jokes and remove them if they didn't hit right with your audience.
<p align = "center">
<img width="1440" alt="Saved dad jokes" src="https://user-images.githubusercontent.com/66852774/110394421-a7abca00-8029-11eb-9252-fb996220b46c.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    Saved jokes are also saved to <code>localStorage</code> so you can come back to them later.
  </details>

#### Get Directions
Now that you've selected a brewery to go to and saved a dad joke or two, you're ready to go be social! Hit "Get Directions" to get directions to your selected brewery in Google Maps. Remember, you can always access your saved dad jokes on mobile, in case you want to brush up on them during the Uber ride there.
<p align = "center">
<img width="1440" alt="Get Directions" src="https://user-images.githubusercontent.com/66852774/110394481-be522100-8029-11eb-87f9-77b14bb77b52.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    The brewery name is interpolated into the Google Maps API endpoint so that user is taken directly to that location page in Google Maps.
  </details>

### Accessibility
This app was built with all users in mind. I used Lighthouse and [WAVE](https://wave.webaim.org/) to work towards including as broad of an audience as I could. Of course, as I am committed to including all users, I am ready to make future edits to address any areas that I may have missed.

### Future Improvements
- Allow users to save breweries
- Bring in the Open Brewery DB autocomplete search endpoint
- Allow users to search dad jokes so they can have a conversation starter on a specific topic when they visit a brewery

---

## Author
<table>
    <tr>
        <td> Tashia Davis <a href="https://github.com/tashiad">GH</td>
    </tr>
 <td><img src="https://avatars3.githubusercontent.com/u/66852774?s=400&v=4" alt="Ms. Davis"
 width="150" height="auto" /></td>
</table>
