"use client";

import { useState } from "react";

const WritingFeedbackPage = () => {
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [draft, setDraft] = useState("");
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleGetFeedback = () => {
    setStatus("loading");

    const shouldFail = Math.random() < 0.3;

    setTimeout(() => {
      if (shouldFail) {
        setStatus("error");
        return;
      }
      setFeedback(`Feedback for ${assignmentTitle}`);
      setStatus("idle");
    }, 2000);
  };

  const isFormValid = assignmentTitle.trim() !== "" && draft.trim() !== "";

  return (
    <div>
      <h1>AI Writing Feedback</h1>
      <p>
        Paste your writing below and get structured AI feedback to improve it.
      </p>
      <div>
        <div>
          <label htmlFor="assignmentTitle">Assignment Title</label>
          <input
            id="assignmentTitle"
            type="text"
            value={assignmentTitle}
            onChange={(e) => {
              setAssignmentTitle(e.target.value);
              setStatus("idle");
            }}
          />
        </div>

        <div>
          <label htmlFor="draft">Draft</label>
          <textarea
            id="draft"
            rows={8}
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              setStatus("idle");
            }}
          ></textarea>
        </div>

        <button
          onClick={handleGetFeedback}
          disabled={status === "loading" || !isFormValid}
        >
          {status === "loading" ? "Generating..." : "Get Feedback"}
        </button>
      </div>

      {status === "error" && (
        <div>
          <p>Something went wrong. Please try again.</p>
          <button onClick={handleGetFeedback}>Retry</button>
        </div>
      )}

      <div>
        <h2>Feedback</h2>
        <p>
          {status === "loading"
            ? "Generating feedback..."
            : feedback
              ? feedback
              : "Feedback will appear here after submission."}
        </p>
      </div>
    </div>
  );
};

export default WritingFeedbackPage;
