"use client";

import { useState } from "react";

const WritingFeedbackPage = () => {
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [draft, setDraft] = useState("");

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
            onChange={(e) => setAssignmentTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="draft">Draft</label>
          <textarea
            id="draft"
            rows={8}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          ></textarea>
        </div>

        <button>Get Feedback</button>
      </div>

      <div>
        <h2>Feedback</h2>
        <p>Feedback will appear here after submission.</p>
      </div>
    </div>
  );
};

export default WritingFeedbackPage;
