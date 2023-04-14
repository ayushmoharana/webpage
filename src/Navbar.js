import "./Navbar.css";

export default function Navbar({ elements, setElements }) {
  const quote =
    "Astronomy, as nothing else can do, teaches men humility - Arthur C. Clarke";

  const handleNavChange = (navId) => {
    switch (navId) {
      case 0:
        setElements([
          { id: 0, name: "Home", selected: true },
          { id: 1, name: "Projects", selected: false },
          { id: 2, name: "CV", selected: false },
          { id: 3, name: "Gallery", selected: false },
        ]);
        break;
      case 1:
        setElements([
          { id: 0, name: "Home", selected: false },
          { id: 1, name: "Projects", selected: true },
          { id: 2, name: "CV", selected: false },
          { id: 3, name: "Gallery", selected: false },
        ]);
        break;
      case 2:
        setElements([
          { id: 0, name: "Home", selected: false },
          { id: 1, name: "Projects", selected: false },
          { id: 2, name: "CV", selected: true },
          { id: 3, name: "Gallery", selected: false },
        ]);
        break;
      case 3:
        setElements([
          { id: 0, name: "Home", selected: false },
          { id: 1, name: "Projects", selected: false },
          { id: 2, name: "CV", selected: false },
          { id: 3, name: "Gallery", selected: true },
        ]);
        break;
      default:
        setElements([
          { id: 0, name: "Home", selected: true },
          { id: 1, name: "Projects", selected: false },
          { id: 2, name: "CV", selected: false },
          { id: 3, name: "Gallery", selected: false },
        ]);
        break;
    }
  };
  return (
    <div className="navbar-wrapper">
      <p
        style={{
          color: "white",
          marginLeft: 24,
          fontFamily: "SpaceGrotesk-Bold",
        }}
      >
        {quote}
      </p>
      <div className="navbar-elements">
        {elements.map((el) => (
          <p
            onClick={() => handleNavChange(el.id)}
            key={el.id}
            style={{
              cursor: "pointer",
              color: "white",
              padding: "0 8px 0 8px",
              fontFamily: el.selected
                ? "SpaceGrotesk-Bold"
                : "SpaceGrotesk-Regular",
            }}
          >
            {el.name}
          </p>
        ))}
      </div>
    </div>
  );
}
