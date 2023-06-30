import React from "react";
import { Link } from "react-router-dom";

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h2>{train.name}</h2>
      <p>Departure Time: {train.departureTime}</p>
      <p>Arrival Time: {train.arrivalTime}</p>
      <Link to={`/trains/${train.id}`}>View Details</Link>
    </div>
  );
}

export default TrainCard;
