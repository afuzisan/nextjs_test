"use client";

import { useState, useEffect } from "react";

const SidebarButton = () => {
  const [sidebarDisplay, setSidebarDisplay] = useState("");

  useEffect(() => {
    const sidebar = document.querySelector("#sidebar") as HTMLElement;
    if (sidebar) {
      sidebar.style.display = sidebarDisplay;
    }
  }, [sidebarDisplay]);

  return (
    <div
      className="sidebarButton"
      onClick={() =>
        setSidebarDisplay(sidebarDisplay === "block" ? "none" : "block")
      }
      style={{ fontSize: sidebarDisplay === "block" ? "25px" : "14px" }}
    >
      {sidebarDisplay === "block" ? "✕" : "Menu"}
    </div>
  );
};

export default SidebarButton;
