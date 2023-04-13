import DoubleOrbitAnimation from "./DoubleOrbitAnimation";
import Introduction from "./Introduction";
import PlanetAnimationHero from "./PlanetAnimationHero";
import ToFroAnimation from "./ToFroAnimation";

export default function Content() {
  return (
    <div>
      <div>
        <PlanetAnimationHero />
      </div>
      <div>
        <Introduction />
      </div>
      <div>
        <ToFroAnimation />
      </div>

      {/* <DoubleOrbitAnimation /> */}
    </div>
  );
}
