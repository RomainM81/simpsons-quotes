import React from 'react';


function QuoteCard ({ characters }) {

  return (

    characters && (

      <div>

        <img src={characters.image} alt={characters.character} />

        <ul>

          <li>

            Name: {characters.character}

          </li>

          <li>Quote: {characters.quote}</li>

        </ul>

      </div>

    )

  );

}


export default QuoteCard;