import "./Homepage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Homepage() {
  const [phrasemojis, setPhrasemojis] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/phrasemojis").then((response) => {
      setPhrasemojis(response.data);
    });
  }, []);
  console.log("LIST", phrasemojis);

  var phrasemoji = phrasemojis[Math.floor(Math.random()*phrasemojis.length)];
  console.log("INDV EMOJI", phrasemoji)

  return (
    <div className="main-homepage">
      <section>
        <h2>✨ PHRASEMOJI ✨</h2>
        <h6 className="subtext">
          guess the phrase that matches the list of emojis <br />
          example: 😇 🐮 -> "Holy Cow"
        </h6>
      </section>
      <section>
        {/* UPDATE - this is where the phrasemoji list of the day will be called */}
        <h1 className="emojis">{phrasemoji.phrase}</h1>
      </section>
      <section>
        <form>
          <input
            className="answer"
            type="text"
            name="phrasemoji"
            placeholder="Answer"
            autofocus
          />
          <br />
          <input
            className="submit"
            type="submit"
            value="submit your phrasemoji"
          />
        </form>
      </section>
    </div>
  );
}

export default Homepage;
