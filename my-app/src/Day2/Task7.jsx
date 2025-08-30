import React, { useState } from "react";

function TextCounterPreview() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "10px 70px",
        border: "2px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        margin: "20px 70px"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Live Text Preview & Counter
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yahan type karein..."
        style={{
          width: "100%",
          height: "120px",
          padding: "10px",
          // marginTop: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          resize: "none",
        }}
      />

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "bold", color: "#555" }}>
          Characters: {text.length}
        </span>
        <span style={{ fontStyle: "italic", color: "#777" }}>Live Preview:</span>
      </div>

      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          minHeight: "60px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          border: "1px solid #eee",
          color: "#333",
        }}
      >
        {text || "Yahan aapka text live preview hoga..."}
      </div>
    </div>
  );
}

export default TextCounterPreview;
