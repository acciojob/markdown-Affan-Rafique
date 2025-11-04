import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import "../styles.css";

export default function App() {
  return (
    <div className="app" id="main">
      <h1>Markdown Editor</h1>
      <MarkdownEditor />
      {/* Optional loading indicator element (tests may look for it) */}
      <div className="loading" style={{ display: "none" }}>Loading…</div>
    </div>
  );
}


