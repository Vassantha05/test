import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrainById } from "./services/trainService";

function TrainDetails() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch train details from the backend API using the trainService
    getTrainById(id)
      .then((data) => setTrain(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="train-details">
      <h1>Train Details</h1>
      {train ? (
        <>
          <h2>{train.name}</h2>
          <p>Departure Time: {train.departureTime}</p>
          <p>Arrival Time: {train.arrivalTime}</p>
          {/* Add more train details */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TrainDetails;
