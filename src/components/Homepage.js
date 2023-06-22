import './Homepage.css';

function Homepage() {
    return (
      <div className="main-homepage">
        <h1>✨ PHRASEMOJI ✨</h1>
        <section>guess the phrase that matches the list of emojis <br/>
            example: 😇 🐮 -> "Holy Cow"
        </section>
        <section>
            {/* UPDATE - this is where the phrasemoji list of the day will be called */}
            <h1 className="emojis">⭐️ ⭐️ ⭐️</h1>
        </section>
        <section>
            <form>
                <label>
                    <input type="text" name="phrasemoji" placeholder="Answer" />
                </label>
                <br/>
                <input type="submit" value="submit your phrasemoji" />
            </form>
        </section>
      </div>
    );
  }
  
  export default Homepage;