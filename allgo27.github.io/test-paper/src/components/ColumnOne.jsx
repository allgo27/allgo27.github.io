import "../App.css";
import evan from "../evan_edit.png";
import { LogoFacebook } from "react-ionicons";
import { LogoInstagram } from "react-ionicons";
import { LogoLinkedin } from "react-ionicons";
import { useState } from "react";

function ColumnOne() {
  const [hoveringOverFacebook, setHoveringOverFacebook] = useState(false);
  const [hoveringOverInsta, setHoveringOverInsta] = useState(false);
  const [hoveringOverLinked, setHoveringOverLinked] = useState(false);

  return (
    <div className="ColumnOne">
      <div className="ColumnOneWrapper">
        <h3 style={{ fontSize: "20px", fontWeight: 300 }}>
          "Everything worthwhile is done with other people."
        </h3>
        <h4 style={{ fontSize: "15px", margin: 0, padding: 0 }}>
          - Mariame Kaba
        </h4>
        <img src={evan} />
        <h1 style={{ fontSize: "30px", margin: 0, padding: 0 }}>
          Evan Milo Allgood{" "}
        </h1>
        <h4 style={{ fontSize: "15px", margin: 0, padding: 5 }}>
          they/them • he/him
        </h4>
        <a href="mailto:evanmallgood@gmail.com">evanmallgood@gmail.com </a>
        <br />
        <div className="iconWrapper">
          <a
            href="https://www.facebook.com/evan.its.allgood"
            onMouseEnter={() => setHoveringOverFacebook(true)}
            onMouseLeave={() => setHoveringOverFacebook(false)}
          >
            <LogoFacebook
              className="logo"
              color={hoveringOverFacebook ? "#9E7B9B" : "#FFF"}
              title={"Facebook Link"}
              height="25px"
              width="25px"
            />
          </a>
          <a
            href="https://www.instagram.com/it_sallgood/"
            onMouseEnter={() => setHoveringOverInsta(true)}
            onMouseLeave={() => setHoveringOverInsta(false)}
          >
            <LogoInstagram
              className="logo"
              color={hoveringOverInsta ? "#9E7B9B" : "#FFF"}
              title={"Instagram Link"}
              height="25px"
              width="25px"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/evanallgood/"
            onMouseEnter={() => setHoveringOverLinked(true)}
            onMouseLeave={() => setHoveringOverLinked(false)}
          >
            <LogoLinkedin
              className="logo"
              color={hoveringOverLinked ? "#9E7B9B" : "#FFF"}
              title={"LinkedIn Logo"}
              height="25px"
              width="25px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ColumnOne;
