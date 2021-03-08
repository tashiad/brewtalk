import React from 'react'
import './About.css'

const About = () => {
  return (
    <main className="about-container">
      <h2>About</h2>
      <h3>For introverted craft beer lovers who need help being social again in a post-COVID world.</h3>
      <p>It’s been a year since the COVID pandemic changed the world as we knew it. In terms of our social lives, we all stayed home a lot more, which was generally good news for us introverts&mdash;at first. Now, as more and more people are getting vaccinated, it’ll soon be time to emerge from our homes and venture out into the light.</p>
      <p>With BrewTalk, craft beer-lovers can find a brewery to visit IRL and come prepared with a G-rated, crowd-pleasing dad joke to help ease them back into having a social life in person again.</p>
      <hr/>
      <h2>How It Works</h2>
      <h3>🍻 Step 1</h3>
      <p>Search for a brewery directly by name or browse breweries by city. Click "Select" to commit to going to that brewery, which will allow you to get directions to it in Step 3. If you're afraid of committment (or if you simply change your mind), you can unselect the brewery to go back to the search results, or start a new search.</p>
      <h3>🧔 Step 2</h3>
      <p>Click the "Generate dad joke" button to generate a random dad joke. If you like it, you can click save to add it to your saved jokes. If you want to find another dad joke, simply click the "Generate dad joke" button again. You can visit the Saved Jokes page to view all your saved dad jokes and remove them if they didn't hit right with your audience.</p>
      <h3>👍 Step 3</h3>
      <p>Now that you've selected a brewery to go to and saved a dad joke or two, you're ready to go be social! Hit "Get Directions" to get directions to your selected brewery in Google Maps. Remember, you can always access your saved dad jokes on mobile, in case you want to brush up on them during the Uber ride there.</p>
      <hr/>
      <p><em>This site was created by Tashia Davis, a self-identified introverted craft beer-lover who grew up in the brewery mecca of Bend, Oregon (and loves a good dad joke).</em></p>
      <p><em>If you enjoyed it, you can:</em></p>
      <ul>
        <li>View the code <a href="https://github.com/tashiad/brewtalk" target="_blank" rel="noreferrer">here.</a></li>
        <li>View more of her work on <a href="https://github.com/tashiad" target="_blank" rel="noreferrer">GitHub.</a></li>
      </ul>
    </main>
  )
}

export default About
