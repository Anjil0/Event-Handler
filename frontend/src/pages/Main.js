import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import HackathonForm from "../components/HackathonForm";

const Main = () => {
  const { id: eventId } = useParams();
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/");
    alert("Event saved successfully");
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        {eventId ? "Edit Hackathon Event" : "Create New Hackathon Event"}
      </h1>
      <HackathonForm eventId={eventId} onSuccess={handleSuccess} />
    </div>
  );
};

export default Main;