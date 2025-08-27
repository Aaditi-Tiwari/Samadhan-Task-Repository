import { useState } from "react";

export default function Task7() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          ✨ Live Text Preview + Counter ✨
        </h2>

        {/* Input box */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something amazing..."
          className="w-full h-32 border-2 border-gray-200 rounded-xl p-3 text-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition duration-200"
        />

        {/* Counter */}
        <p className="mt-3 text-sm text-gray-600 text-right">
          Characters:{" "}
          <span className="font-semibold text-purple-600">{text.length}</span>
        </p>

        {/* Live Preview */}
        <div className="mt-6 p-5 border-2 border-dashed rounded-xl bg-gray-50 min-h-[70px] text-gray-700 text-base">
          {text ? text : "👀 Your text will appear here..."}
        </div>
      </div>
    </div>
  );
}
