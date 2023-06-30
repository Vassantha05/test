import React, { useEffect, useState } from "react";
import TrainCard from "./common/TrainCard";
import { getAllTrains } from "./services/trainService";

function TrainList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data from the backend API using the trainService
    getAllTrains()
      .then((data) => setTrains(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="train-list">
      <h1>All Trains</h1>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainList;
