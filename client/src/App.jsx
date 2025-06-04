import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import MissionStatement from "./components/MissionStatement";
import d2vTitle from "./assets/d2vlabs-title.png";
import InnovatorCorporation from "./components/InnovatorCorporation";

function App() {
  const [innovator, setInnovator] = useState(false);
  const [corporation, setCorporation] = useState(false);

  const handleInnovatorToggle = () => {
    setInnovator(!innovator);
    if (corporation) {
      setCorporation(false); // Reset corporation state if innovator is selected
    }
  };

  const handleCorporationToggle = () => {
    setCorporation(!corporation);
    if (innovator) {
      setInnovator(false); // Reset innovator state if corporation is selected
    }
  };

  return (
    <div className="master-app">
      <Navbar />

      <section className="hero">
        <div className="title-image-container">
          <img className="d2vlabs-title" src={d2vTitle} alt="D2VLabs Title" />
        </div>
      </section>

      <section className="mission-section">
        <MissionStatement />
      </section>

      <section className="innovations-corporations-buttons-section">
        <h1 className="innovations-corporations-title">
          Are you an Innovator or a Corporation?
        </h1>
        <div className="innovations-corporations-button-container">
          <button
            className={`innovator-button ${innovator ? "clicked" : ""}`}
            onClick={handleInnovatorToggle}
          >
            <span>Innovator</span>
          </button>

          <button
            className={`corporation-button ${corporation ? "clicked" : ""}`}
            onClick={handleCorporationToggle}
          >
            <span>Corporation</span>
          </button>
        </div>

        <div className="innovations-corporations-content">
          {!innovator && !corporation ? null : (
            <>
              <InnovatorCorporation
                innovator={innovator}
                setInnovator={setInnovator}
                corporation={corporation}
                setCorporation={setCorporation}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
