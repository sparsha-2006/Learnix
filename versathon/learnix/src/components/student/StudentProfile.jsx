import { useState } from "react";

function StudentProfile({ xp, level }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "absolute", top: 20, right: 20 }}>
      <button onClick={() => setOpen(!open)}>👤</button>

      {open && (
        <div style={{ background: "#eee", padding: "10px" }}>
          <p>📊 Engagement Dashboard</p>
          <p>💬 Personalized Feedback</p>
          <p>⭐ Level: {level}</p>
          <p>🔥 XP: {xp}</p>
          <p>⚙️ Settings</p>
        </div>
      )}
    </div>
  );
}

export default StudentProfile;
