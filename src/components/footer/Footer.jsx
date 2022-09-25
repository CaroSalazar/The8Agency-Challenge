import "./Footer.styles.css";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import snapchat from "../../assets/snapchat.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <p>© 2020</p>
        <div className="social-networks-footer">
          <div>
            <a
              href={"https://www.twitter.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="MDN" />
            </a>
          </div>
          <div>
            <a
              href={"https://www.facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="MDN" />
            </a>
          </div>
          <div>
            <a
              href={"https://www.linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="MDN" />
            </a>
          </div>
          <div>
            <a
              href={"https://www.youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="MDN" />
            </a>
          </div>
          <div>
            <a
              href={"https://www.instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="MDN" />
            </a>
          </div>
          <div>
            <a
              href={"https://www.snapchat.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={snapchat} alt="MDN" />
            </a>
          </div>
        </div>
      </div>
      <hr className="hr-footer" />
    </footer>
  );
};
export default Footer;