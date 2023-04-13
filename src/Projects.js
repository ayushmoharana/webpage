import React from "react";
import { ReactComponent as Hot } from "./assets/Hot.svg";
import { ReactComponent as Compact } from "./assets/Compact.svg";
import { ReactComponent as Eclipse } from "./assets/Eclipse.svg";

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: "Compact Hierarchical Triples",
      icon: <Compact style={{ height: 250, width: 250 }} />,
    },
    {
      id: 1,
      name: "Hot stars in globular clusters",
      icon: <Hot style={{ height: 200, width: 200 }} />,
    },
    {
      id: 2,
      name: "Eclipse timing variations",
      icon: <Eclipse style={{ height: 200, width: 200 }} />,
    },
  ];
  return (
    <div
      style={{
        marginTop: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {projects.map((p) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              width: 330,
              height: 330,
              borderRadius: "10%",
              background: "#212121",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 16px 40px rgba(33, 33, 33, 0.25)",
            }}
          >
            {p.icon}
          </div>
          <p style={{ fontFamily: "SpaceGrotesk-Bold", fontSize: 24 }}>
            {p.name}
          </p>
        </div>
      ))}
    </div>
  );
}
