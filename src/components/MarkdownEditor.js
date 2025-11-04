import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor() {
  const [text, setText] = useState("# Hello Markdown!\n\nType your text here...");
  const [preview, setPreview] = useState(text);

  // useEffect to sync preview in real-time
  useEffect(() => {
    setPreview(text);
  }, [text]);

  return (
    <div className="editor-wrap">
      {/* Left: Markdown input */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write some **Markdown** here..."
      />

      {/* Right: Live Markdown preview */}
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}
