import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Share.css'
// import share from '../Asset/output.png'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { faSquareFacebook, faSquareTwitter, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function App() {
  // Get the URL and title of the current page dynamically
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title =
    typeof document !== "undefined"
      ? document.title
      : "Check out this awesome content!";

  return (
    <div className="">
      <div className="">
        <h1 style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
          Help missing childrens and SHARE our app!
        </h1>
      </div>
      <div className="share-buttons text-center">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="share"
          style={{
            color: "white",
            margin: "10px",
            fontSize: "16px",
            padding: "6px",
          }}
        >
          Share on Facebook
        </FacebookShareButton>
        <FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#74C0FC" }} />
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="share"
          style={{
            color: "white",
            margin: "10px",
            fontSize: "16px",
            padding: "6px",
          }}
        >
          Share on Twitter
        </TwitterShareButton>
        <FontAwesomeIcon icon={faSquareTwitter} style={{ color: "#74C0FC" }} />

        <WhatsappShareButton
          url={shareUrl}
          title={title}
          className="share"
          style={{
            color: "white",
            margin: "10px",
            fontSize: "16px",
            padding: "6px",
          }}
        >
          Share on WhatsApp
        </WhatsappShareButton>
        <FontAwesomeIcon icon={faSquareWhatsapp} style={{ color: "#74C0FC" }} />
      </div>
      {/* <img src={share} alt='.' /> */}
      <div className="a"></div>
      <div>
        <div className="div"></div>
        <div className="div"></div>
      </div>
    </div>
  );
}
