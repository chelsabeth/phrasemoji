import './TryAgain.css';

function TryAgain() {
    // UPDATE - put the amount of hours remaining in the h2 and the correct phrasemoji in the "answer-correct" div
    return (
      <div className="tryagain-page">
        <section>
            <h6 className="subtext">YOU TRIED YOUR BEST!</h6>
            <h2>TRY AGAIN IN __ HOURS</h2>
        </section>
        <section className="answer-section">
            <div className="answer-text">the phrasemoji of the day is...</div>
            <div className="answer-correct">correct answer here</div>
        </section>
      </div>
    );
  }
  
  export default TryAgain;