import "./PlanetAnimationHero.css";

export default function PlanetAnimationHero() {
  return (
    <>
      <div className="planets-wrapper">
        <div className="rotating-planet"></div>
      </div>
      <div className="planets-wrapper-skewed">
        <div className="rotating-planet-skewed"></div>
      </div>
    </>
  );
}
