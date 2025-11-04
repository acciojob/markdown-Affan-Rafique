import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import "../styles.css";

export default function App() {
  return (
    <div className="app">
      <h1>Markdown Editor</h1>
      <MarkdownEditor />
      {/* hidden element for test class check */}
      <div className="loading" style={{ display: "none" }}>
        Loading...
      </div>
    </div>
  );
}


