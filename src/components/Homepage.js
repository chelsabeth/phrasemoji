import './Homepage.css';

function Homepage() {
    return (
      <div className="main-homepage">
        <h2>✨ PHRASEMOJI ✨</h2>
        <section>
            <h6 className="instructions">guess the phrase that matches the list of emojis <br/>
            example: 😇 🐮 -> "Holy Cow"
            </h6>
        </section>
        <section>
            {/* UPDATE - this is where the phrasemoji list of the day will be called */}
            <h1 className="emojis">⭐️ ⭐️ ⭐️</h1>
        </section>
        <section>
            <form>
                <input className="answer" type="text" name="phrasemoji" placeholder="Answer" autofocus/>
                <br/>
                <input className="submit" type="submit" value="submit your phrasemoji" />
            </form>
        </section>
      </div>
    );
  }
  
  export default Homepage;