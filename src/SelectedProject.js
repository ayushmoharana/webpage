import React from "react";
import { projectDetails } from "./projectDetails";

export default function SelectedProject({ setSelectedProjectId, id }) {
  return (
    <div
      style={{
        background: "#212121",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "93.6vh",
      }}
    >
      <p
        style={{
          color: "white",
          fontFamily: "SpaceGrotesk-Regular",
          width: 800,
        }}
      >
        {projectDetails[id].content}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {projectDetails[id].images.map((image) => (
          <div>
            <div style={{ background: "#d9d9d9" }}>
              <img
                src={image.link}
                alt="first image"
                width={400}
                height={300}
              />
            </div>
            <p
              style={{
                fontSize: 12,
                width: 400,
                color: "white",
                fontFamily: "SpaceGrotesk-Regular",
              }}
            >
              {image.content}
            </p>
          </div>
        ))}
      </div>
      <button
        style={{
          cursor: "pointer",
          outline: "transparent",
          border: "transparent",
          position: "fixed",
          bottom: 130,
          fontFamily: "SpaceGrotesk-Bold",
          background: "white",
          width: 150,
          height: 32,
          borderRadius: 20,
        }}
        onClick={() => setSelectedProjectId(null)}
      >
        View all projects
      </button>
    </div>
  );
}
