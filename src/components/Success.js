import './Success.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Success() {
    return (
      <div className="success-page">
        <section>
            <h2>🎉 CONGRATULATIONS! 🎉</h2>
            <h6 className="subtext">YOU GUESSED THE RIGHT PHRASEMOJI!</h6>
        </section>
        <section className="share-section">
            <div className="share-text">share your success with friends</div>
        </section>
        {/* UPDATE - this will be where users can share their success on social media */}
        <section className="social-icons">
            <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
            <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
        </section>
      </div>
    );
  }
  
  export default Success;