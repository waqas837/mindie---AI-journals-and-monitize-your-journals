// components/JournalTemplates.jsx
"use client";
import React from "react";

export default function JournalTemplates({ journals, setJournals }) {
  return (
    <div className="space-y-8 p-6 bg-slate-900">
      <h2 className="text-2xl font-serif font-bold mb-6 text-white">
        Your Journal Collection
      </h2>

      {journals.length === 0 ? (
        <p className="text-indigo-300 italic">
          Begin your journaling journey with your first entry.
        </p>
      ) : (
        journals.map((j, index) => {
          // Default to classic style if no style is specified
          const bookStyle = j.bookStyle || "classic";

          return (
            <div key={j.id} className="relative mb-16 mx-auto max-w-lg">
              {/* Style Selection Menu */}
              <div className="absolute -top-10 right-0 z-20">
                <select
                  onChange={(e) => {
                    setJournals((prevJournals) => {
                      const updatedJournals = [...prevJournals];
                      updatedJournals[index].bookStyle = e.target.value;
                      return updatedJournals;
                    });
                  }}
                  value={bookStyle}
                  className="bg-slate-800 text-white border border-slate-600 rounded px-2 py-1 text-sm"
                >
                  <option value="classic">Classic Leather</option>
                  <option value="vintage">Vintage Cloth</option>
                  <option value="modern">Modern Minimalist</option>
                  <option value="fantasy">Fantasy Tome</option>
                  <option value="notebook">Writer's Notebook</option>
                </select>
              </div>

              {/* STYLE 1: CLASSIC LEATHER BOOK */}
              {bookStyle === "classic" && (
                <>
                  {/* Book spine effect */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-8 z-10 rounded-l-lg"
                    style={{
                      background:
                        j.template === "gratitude"
                          ? "linear-gradient(to right, #382a59, #513d84)"
                          : j.template === "review"
                          ? "linear-gradient(to right, #1e3f37, #2a614f)"
                          : j.template === "goals"
                          ? "linear-gradient(to right, #5c3828, #8c502c)"
                          : "linear-gradient(to right, #2d323e, #444b5c)",
                      transform: "rotateY(25deg)",
                      transformOrigin: "left",
                      boxShadow: "inset -2px 0 3px rgba(0,0,0,0.3)",
                    }}
                  ></div>

                  {/* Main book cover */}
                  <div
                    className="p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
                    style={{
                      background:
                        j.template === "gratitude"
                          ? "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjNGIzNjdjIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM1NjQwOGMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4='), linear-gradient(to bottom right, #3b2c63, #644ba1)"
                          : j.template === "review"
                          ? "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjI1MDQzIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyODVjNGYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4='), linear-gradient(to bottom right, #1a3b33, #2d6653)"
                          : j.template === "goals"
                          ? "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjNjkzZDI1Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM3YTQ5MmIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4='), linear-gradient(to bottom right, #5d3621, #8a4f2c)"
                          : "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMzM0MDU1Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzZDRhNjMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4='), linear-gradient(to bottom right, #2b3548, #445270)",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
                      minHeight: "400px",
                    }}
                  >
                    {/* Gold embossed title */}
                    <div
                      className="mb-6 pb-3 text-center"
                      style={{
                        background:
                          "linear-gradient(to bottom, #f0e6a1, #dac268)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0px 1px 1px rgba(0,0,0,0.5)",
                        fontFamily: "Baskerville, Garamond, serif",
                        letterSpacing: "2px",
                      }}
                    >
                      <h3 className="text-2xl font-bold uppercase tracking-widest">
                        {j.template === "gratitude"
                          ? "GRATITUDE"
                          : j.template === "review"
                          ? "DAILY REFLECTIONS"
                          : j.template === "goals"
                          ? "ASPIRATIONS & GOALS"
                          : "PERSONAL JOURNAL"}
                      </h3>
                      <div
                        className="mt-2 mx-auto w-32 h-1"
                        style={{
                          background:
                            "linear-gradient(to right, transparent, #f0e6a1, transparent)",
                        }}
                      ></div>
                    </div>

                    {/* Content with aged paper look */}
                    <div
                      className="mt-8 p-6 mx-4 rounded"
                      style={{
                        background: "rgba(245, 242, 226, 0.95)",
                        boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
                        color: "#333",
                        minHeight: "200px",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjVmMmUyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlYWU3ZDkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=")',
                      }}
                    >
                      <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: j.content }}
                      />
                    </div>

                    {/* Footer with date */}
                    <div className="mt-6 pt-2 text-center">
                      <p
                        style={{
                          color: "rgba(240, 230, 161, 0.7)",
                          fontFamily: "Baskerville, Garamond, serif",
                          letterSpacing: "1px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {new Date(j.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Page edges effect */}
                  <div
                    className="absolute right-0 top-2 bottom-2 w-2 rounded-r-sm"
                    style={{
                      background:
                        "repeating-linear-gradient(to bottom, #f5f2e2, #e8e5d8 2px)",
                      transform: "translateX(1px)",
                      boxShadow: "1px 0 3px rgba(0,0,0,0.2)",
                    }}
                  ></div>
                </>
              )}

              {/* STYLE 2: VINTAGE CLOTH BOUND BOOK */}
              {bookStyle === "vintage" && (
                <>
                  {/* Book cloth texture with frayed edges */}
                  <div
                    className="relative p-8 shadow-xl transform transition-transform duration-300 hover:scale-105"
                    style={{
                      background:
                        j.template === "gratitude"
                          ? "#9370db"
                          : j.template === "review"
                          ? "#3a7e6a"
                          : j.template === "goals"
                          ? "#b86137"
                          : "#526480",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
                      minHeight: "400px",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Cloth texture overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIj48L3JlY3Q+CiAgPHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjBNMTAgMEwxMCAyME0wIDEwTDIwIDEwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==")',
                        opacity: "0.6",
                        mixBlendMode: "overlay",
                      }}
                    ></div>

                    {/* Worn edges overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        boxShadow: "inset 0 0 15px 5px rgba(0,0,0,0.3)",
                        pointerEvents: "none",
                      }}
                    ></div>

                    {/* Vintage title with frame */}
                    <div
                      className="relative mb-6 border-2 rounded p-4 text-center"
                      style={{
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        background: "rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <h3
                        className="text-white font-serif text-2xl"
                        style={{
                          fontFamily: "Georgia, serif",
                          letterSpacing: "3px",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        {j.template === "gratitude"
                          ? "Gratitude"
                          : j.template === "review"
                          ? "Daily Reflections"
                          : j.template === "goals"
                          ? "Aspirations & Goals"
                          : "Personal Journal"}
                      </h3>
                    </div>

                    {/* Content with vintage paper look */}
                    <div
                      className="relative mt-8 p-6 rounded bg-amber-50"
                      style={{
                        boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                        color: "#3c3c3c",
                        minHeight: "200px",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZmZmYmViIj48L3JlY3Q+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSIgZmlsbD0iI2VkZThlMCI+PC9jaXJjbGU+CiAgPGNpcmNsZSBjeD0iMzgiIGN5PSIzOCIgcj0iMSIgZmlsbD0iI2VkZThlMCI+PC9jaXJjbGU+Cjwvc3ZnPg==")',
                      }}
                    >
                      {/* Vintage paper effect */}
                      <div
                        className="absolute inset-0 rounded"
                        style={{
                          background:
                            "radial-gradient(circle at 20% 20%, rgba(252, 249, 235, 0.5), rgba(252, 229, 188, 0.2) 80%)",
                          mixBlendMode: "multiply",
                        }}
                      ></div>

                      <div
                        className="relative prose max-w-none"
                        style={{
                          fontFamily: "Georgia, serif",
                          lineHeight: "1.6",
                        }}
                        dangerouslySetInnerHTML={{ __html: j.content }}
                      />
                    </div>

                    {/* Vintage date stamp */}
                    <div className="mt-6 pt-2 flex justify-center">
                      <div
                        style={{
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          borderRadius: "4px",
                          padding: "4px 12px",
                          color: "rgba(255, 255, 255, 0.8)",
                          fontFamily: "monospace",
                          transform: "rotate(-2deg)",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        }}
                      >
                        {new Date(j.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* STYLE 3: MODERN MINIMALIST */}
              {bookStyle === "modern" && (
                <div
                  className="p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:-translate-y-2"
                  style={{
                    background:
                      j.template === "gratitude"
                        ? "linear-gradient(135deg, #8a64f0, #5a42bd)"
                        : j.template === "review"
                        ? "linear-gradient(135deg, #4cb8a0, #206d5d)"
                        : j.template === "goals"
                        ? "linear-gradient(135deg, #ff8a4c, #e05f23)"
                        : "linear-gradient(135deg, #7d8ba1, #4a5568)",
                    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)",
                    minHeight: "400px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Modern clean title */}
                  <div className="mb-6 pb-3">
                    <h3
                      className="text-white text-3xl font-light tracking-wide"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                      }}
                    >
                      {j.template === "gratitude"
                        ? "gratitude."
                        : j.template === "review"
                        ? "reflections."
                        : j.template === "goals"
                        ? "goals."
                        : "journal."}
                    </h3>
                    <div className="mt-2 w-12 h-1 bg-white/30"></div>
                  </div>

                  {/* Content with clean white card */}
                  <div
                    className="mt-8 p-6 rounded-lg bg-white"
                    style={{
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      color: "#333",
                      minHeight: "200px",
                    }}
                  >
                    <div
                      className="prose max-w-none"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                      dangerouslySetInnerHTML={{ __html: j.content }}
                    />
                  </div>

                  {/* Minimalist footer with date */}
                  <div className="mt-6 pt-2 text-right">
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {new Date(j.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}

              {/* STYLE 4: FANTASY TOME */}
              {bookStyle === "fantasy" && (
                <>
                  {/* Ornate fantasy book cover */}
                  <div
                    className="relative p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
                    style={{
                      background:
                        j.template === "gratitude"
                          ? "radial-gradient(circle at center, #634193, #372358)"
                          : j.template === "review"
                          ? "radial-gradient(circle at center, #2a6e57, #1a4535)"
                          : j.template === "goals"
                          ? "radial-gradient(circle at center, #a1582f, #6a3111)"
                          : "radial-gradient(circle at center, #3e506b, #232f43)",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
                      minHeight: "450px",
                      border: "6px solid",
                      borderImage:
                        j.template === "gratitude"
                          ? "linear-gradient(45deg, #8a64f0, #5a42bd) 1"
                          : j.template === "review"
                          ? "linear-gradient(45deg, #4cb8a0, #206d5d) 1"
                          : j.template === "goals"
                          ? "linear-gradient(45deg, #ff8a4c, #e05f23) 1"
                          : "linear-gradient(45deg, #7d8ba1, #4a5568) 1",
                    }}
                  >
                    {/* Fantasy texture overlay */}
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSI+PC9yZWN0PgogIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSI+PC9jaXJjbGU+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI0MCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIj48L2NpcmNsZT4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjYyIiByPSIzIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiPjwvY2lyY2xlPgogIDxjaXJjbGUgY3g9IjM1IiBjeT0iODUiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSI+PC9jaXJjbGU+Cjwvc3ZnPg==")',
                        opacity: "0.8",
                        mixBlendMode: "overlay",
                        pointerEvents: "none",
                      }}
                    ></div>

                    {/* Ornate frame corners */}
                    <div
                      className="absolute top-2 left-2 w-16 h-16"
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJnb2xkIiBzdHJva2Utd2lkdGg9IjEiPgogIDxwYXRoIGQ9Ik02NCAyNEgzMlYwIiBzdHJva2U9IiNkNGFmMzciPjwvcGF0aD4KICA8cGF0aCBkPSJNNjQgMjBINDBWMCIgc3Ryb2tlPSIjZDRhZjM3Ij48L3BhdGg+CiAgPHBhdGggZD0iTTY0IDE2SDQ4VjAiIHN0cm9rZT0iI2Q0YWYzNyI+PC9wYXRoPgogIDxwYXRoIGQ9Ik02NCAxMkg1NlYwIiBzdHJva2U9IiNkNGFmMzciPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI0OCIgY3k9IjE2IiByPSIyIiBmaWxsPSIjZDRhZjM3Ij48L2NpcmNsZT4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjI0IiByPSIzIiBmaWxsPSIjZDRhZjM3Ij48L2NpcmNsZT4KPC9zdmc+")',
                        transform: "rotate(0deg)",
                        opacity: "0.6",
                      }}
                    ></div>
                    <div
                      className="absolute top-2 right-2 w-16 h-16"
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJnb2xkIiBzdHJva2Utd2lkdGg9IjEiPgogIDxwYXRoIGQ9Ik02NCAyNEgzMlYwIiBzdHJva2U9IiNkNGFmMzciPjwvcGF0aD4KICA8cGF0aCBkPSJNNjQgMjBINDBWMCIgc3Ryb2tlPSIjZDRhZjM3Ij48L3BhdGg+CiAgPHBhdGggZD0iTTY0IDE2SDQ4VjAiIHN0cm9rZT0iI2Q0YWYzNyI+PC9wYXRoPgogIDxwYXRoIGQ9Ik02NCAxMkg1NlYwIiBzdHJva2U9IiNkNGFmMzciPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI0OCIgY3k9IjE2IiByPSIyIiBmaWxsPSIjZDRhZjM3Ij48L2NpcmNsZT4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjI0IiByPSIzIiBmaWxsPSIjZDRhZjM3Ij48L2NpcmNsZT4KPC9zdmc+")',
                        transform: "rotate(90deg)",
                        opacity: "0.6",
                      }}
                    ></div>
                    <div
                      className="absolute bottom-2 left-2 w-16 h-16"
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJnb2xkIiBzdHJva2Utd2lkdGg9IjEiPgogIDxwYXRoIGQ9Ik02NCAyNEgzMlYwIiBzdHJva2U9IiNkNGFmMzciPjwvcGF0aD4KICA8cGF0aCBkPSJNNjQgMjBINDBWMCIgc3Ryb2tlPSIjZDRhZjM3Ij48L3BhdGg+CiAgPHBhdGggZD0iTTY0IDE2SDQ4VjAiIHN0cm9rZT0iI2Q0YWYzNyI+PC9wYXRoPgogIDxwYXRoIGQ9Ik02NCAxMkg1NlYwIiBzdHJva2U9IiNkNGFmMzciPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI0OCIgY3k9IjE2IiByPSIyIiBmaWxsPSIjZDRhZjM3Ij48L2NpcmNsZT4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjI0IiByPSIzIiBmaWxsPSIjZDRhZjM3Ij48L2NpcmNsZT4KPC9zdmc+")',
                        transform: "rotate(270deg)",
                        opacity: "0.6",
                      }}
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 w-16 h-16"
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJnb2xkIiBzdHJva2Utd2lkdGg9IjEiPgogIDxwYXRoIGQ9Ik02NCAyNEgzMlYwIiBzdHJva2U9IiNkNGFmMzciPjwvcGF0aD4KICA8cGF0aCBkPSJNNjQgMjBINDBWMCIgc3Ryb2tlPSIjZDRhZjM3Ij48L3BhdGg+CiAgPHBhdGggZD0iTTY0IDE2SDQ4VjAiIHN0cm9rZT0iI2Q0YWYzNyI+PC9wYXRoPgogIDxwYXRoIGQ9Ik02NCAxMkg1NlYwIiBzdHJva2U9IiNkNGFmMzciPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI0OCIgY3k9IjE2IiByPSIyIiBmaWxsPSIjZDRhZjM3Ij48L2NpcmNsZT4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjI0IiByPSIzIiBmaWxsPSIjZDRhZjM3Ij48L2NpcmNsZT4KPC9zdmc+")',
                        transform: "rotate(180deg)",
                        opacity: "0.6",
                      }}
                    ></div>

                    {/* Fantasy title with ornate look */}
                    <div className="relative mb-6 text-center">
                      <h3
                        className="text-2xl font-bold text-amber-300"
                        style={{
                          fontFamily: "Copperplate, fantasy",
                          letterSpacing: "2px",
                          textShadow:
                            "0 0 5px rgba(0,0,0,0.5), 0 0 20px rgba(212, 175, 55, 0.3)",
                        }}
                      >
                        {j.template === "gratitude"
                          ? "~ Gratitude Chronicles ~"
                          : j.template === "review"
                          ? "~ Reflections of Time ~"
                          : j.template === "goals"
                          ? "~ Tome of Aspirations ~"
                          : "~ Personal Chronicles ~"}
                      </h3>

                      <div
                        className="mt-2 mx-auto w-48 h-2"
                        style={{
                          background:
                            "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.6), transparent)",
                        }}
                      ></div>
                    </div>

                    {/* Content with aged parchment look */}
                    <div
                      className="relative mt-8 p-6 mx-2 rounded"
                      style={{
                        background:
                          "linear-gradient(to bottom right, #f2e9d0, #e9d9b0)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                        color: "#3c3626",
                        minHeight: "200px",
                        border: "1px solid rgba(110, 93, 45, 0.2)",
                      }}
                    >
                      {/* Parchment texture */}
                      <div
                        className="absolute inset-0 rounded"
                        style={{
                          background:
                            'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIgcmVzdWx0PSJub2lzZSI+PC9mZVR1cmJ1bGVuY2U+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMyAwIj48L2ZlQ29sb3JNYXRyaXg+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMyI+PC9yZWN0Pgo8L3N2Zz4=")',
                          opacity: "1",
                          mixBlendMode: "multiply",
                          pointerEvents: "none",
                        }}
                      ></div>

                      <div
                        className="relative prose max-w-none"
                        style={{
                          fontFamily: "Garamond, serif",
                          lineHeight: "1.6",
                        }}
                        dangerouslySetInnerHTML={{ __html: j.content }}
                      />
                    </div>

                    {/* Fantasy date seal */}
                    <div className="mt-6 pt-2 flex justify-center">
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          background:
                            "radial-gradient(circle, rgba(212, 175, 55, 0.7), rgba(165, 124, 22, 0.8))",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
                          color: "#fff",
                          fontFamily: "Copperplate, fantasy",
                          fontSize: "0.7rem",
                          padding: "10px",
                          textAlign: "center",
                          transform: "rotate(-5deg)",
                          textShadow: "0px 1px 1px rgba(0,0,0,0.3)",
                        }}
                      >
                        {new Date(j.created_at).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* STYLE 5: WRITER'S NOTEBOOK */}
              {bookStyle === "notebook" && (
                <>
                  {/* Spiral notebook style */}
                  <div
                    className="relative py-6 px-2 shadow-xl transform transition-transform duration-300 hover:translate-y-1"
                    style={{
                      background: "#f8f8f8",
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                      minHeight: "400px",
                      borderRadius: "0px 5px 5px 0px",
                      borderLeft: "0",
                    }}
                  >
                    {/* Spiral binding */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-around items-center"
                      style={{
                        background:
                          j.template === "gratitude"
                            ? "#9370db"
                            : j.template === "review"
                            ? "#3a7e6a"
                            : j.template === "goals"
                            ? "#b86137"
                            : "#526480",
                        borderRadius: "3px 0 0 3px",
                        transform: "translateX(-5px)",
                      }}
                    >
                      {Array(14)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-4 bg-white rounded-full opacity-70"
                            style={{
                              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
                              margin: "5px 0",
                            }}
                          ></div>
                        ))}
                    </div>

                    <div className="ml-8 mr-4">
                      {/* Notebook title */}
                      <div
                        className="mb-6 text-center border-b-2 pb-3"
                        style={{
                          borderColor:
                            j.template === "gratitude"
                              ? "#9370db"
                              : j.template === "review"
                              ? "#3a7e6a"
                              : j.template === "goals"
                              ? "#b86137"
                              : "#526480",
                          color: "#333",
                        }}
                      >
                        <h3
                          className="text-xl"
                          style={{
                            fontFamily: "Courier, monospace",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                          }}
                        >
                          {j.template === "gratitude"
                            ? "GRATITUDE NOTES"
                            : j.template === "review"
                            ? "DAILY REVIEW"
                            : j.template === "goals"
                            ? "GOAL PLANNING"
                            : "PERSONAL NOTES"}
                        </h3>
                      </div>

                      {/* Content with notebook paper lines */}
                      <div
                        className="relative mt-8 p-6 mx-1"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent 0%, transparent 98%, #ccc 98%, #ccc 100%)",
                          backgroundSize: "100% 32px",
                          lineHeight: "32px",
                          minHeight: "240px",
                        }}
                      >
                        {/* First vertical line for margin */}
                        <div
                          className="absolute left-0 top-0 bottom-0 w-1"
                          style={{
                            borderRight: "1px solid rgba(255, 0, 0, 0.2)",
                            transform: "translateX(20px)",
                          }}
                        ></div>

                        <div
                          className="prose max-w-none pl-8"
                          style={{
                            fontFamily: "Courier, monospace",
                            color: "#333",
                            fontSize: "15px",
                          }}
                          dangerouslySetInnerHTML={{ __html: j.content }}
                        />
                      </div>

                      {/* Notebook footer with date */}
                      <div className="mt-6 pt-2 text-right">
                        <p
                          style={{
                            color: "#666",
                            fontFamily: "Courier, monospace",
                            fontSize: "0.85rem",
                          }}
                        >
                          //{" "}
                          {new Date(j.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Template Selection Buttons positioned at bottom of each journal */}
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
                <button
                  onClick={() => {
                    setJournals((prevJournals) => {
                      const updatedJournals = [...prevJournals];
                      updatedJournals[index].template = "gratitude";
                      return updatedJournals;
                    });
                  }}
                  className={`px-2 py-1 rounded-full text-xs ${
                    j.template === "gratitude"
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  🌼 Gratitude
                </button>
                <button
                  onClick={() => {
                    setJournals((prevJournals) => {
                      const updatedJournals = [...prevJournals];
                      updatedJournals[index].template = "review";
                      return updatedJournals;
                    });
                  }}
                  className={`px-2 py-1 rounded-full text-xs ${
                    j.template === "review"
                      ? "bg-teal-600 text-white"
                      : "bg-teal-100 text-teal-800"
                  }`}
                >
                  🧠 Daily Review
                </button>
                <button
                  onClick={() => {
                    setJournals((prevJournals) => {
                      const updatedJournals = [...prevJournals];
                      updatedJournals[index].template = "goals";
                      return updatedJournals;
                    });
                  }}
                  className={`px-2 py-1 rounded-full text-xs ${
                    j.template === "goals"
                      ? "bg-amber-600 text-white"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  🎯 Goals
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
