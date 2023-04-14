import "./Introduction.css";
import { useTypewriter } from "react-simple-typewriter";

export default function Introduction() {
  const [text, count] = useTypewriter({
    words: [
      "Hi! I am Ayush Moharana",
	  "Ph.D. Student",
      "Nicolaus Copernicus Astronomical Center",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div
      style={{
        display: "absolute",
        top: 0,
        left: "50%",
        right: 0,
        bottom: 0,
        margin: "250px 0 0 50%",
        width: 600,
      }}
    >
      <p className="title">{text}</p>
      <p className="content">
        I am a doctoral candidate at the Nicolaus Copernicus Astronomical Center
        in Poland. I am affiliated with the Polish Academy of Sciences and work
        at the Laboratory of Astrophysics in Torun. I come from Odisha, a state
        on the eastern coast of India. My work is focused on eclipsing binaries
        but I like to work on anything related to observations of low-mass
        stars. Currently, I work on low-mass Compact Heirarchical Triples.
      </p>
    </div>
  );
}
