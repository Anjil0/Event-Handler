import React, { useState } from "react";
import HackathonList from "../components/HackathonList";
import HackathonFilter from "../components/HackathonFilter";

const HomePage = () => {
  const [filters, setFilters] = useState({});

  const handleFilter = (filters) => {
    setFilters(filters);
  };
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div>
      <h1
        style={{
          cursor: "pointer",
          color: "#333",
          textAlign: "center",
          marginBottom: "20px",
        }}
        onClick={handleReload}
      >
        Event Management
      </h1>
      <HackathonFilter onFilter={handleFilter} />
      <HackathonList filters={filters} />
    </div>
  );
};

export default HomePage;
