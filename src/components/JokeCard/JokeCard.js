import React from 'react'
import './JokeCard.css'

const JokeCard = ({ id, joke, selectedJoke, selectJoke, unSelectJoke }) => {

  return (
    <article className={selectedJoke ? 'selectedJoke' : null}>
      <div className="jokeTop">
        <h4>Dad Joke</h4>
        <div className="jokeButtons">
          <button className="cardButton save button-secondary">Save</button>
          {!selectedJoke &&
            <button
              className="cardButton select button-primary"
              onClick={() => selectJoke()}
            >
            Select
            </button>
          }
          {selectedJoke &&
            <button
              className="cardButton select button-primary"
              onClick={() => unSelectJoke()}
            >
            Un-Select
            </button>
          }
        </div>
      </div>
      <p className="cardContents">{joke}</p>
    </article>
  )
}

export default JokeCard
