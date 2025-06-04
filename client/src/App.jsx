import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import MissionStatement from "./components/MissionStatement";
import d2vTitle from "./assets/d2vlabs-title.png";

function App() {
  const [innovator, setInnovator] = useState(false);
  const [corporation, setCorporation] = useState(false);

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
    </div>
  );
}

export default App;
