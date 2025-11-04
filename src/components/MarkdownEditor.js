import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor() {
  const [text, setText] = useState("# Hello Markdown!\n\nType on the left…");
  const [preview, setPreview] = useState(text);

  // live sync via useEffect (the tests require useEffect to update preview)
  useEffect(() => {
    setPreview(text);
  }, [text]);

  return (
    <div className="editor-wrap">
      {/* Left: input */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write some **Markdown** here…"
      />

      {/* Right: preview */}
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}
