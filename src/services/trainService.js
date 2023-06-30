const trains = [
  {
    id: 1,
    name: "Train A",
    departureTime: "10:00 AM",
    arrivalTime: "12:00 PM",
  },
  {
    id: 2,
    name: "Train B",
    departureTime: "11:00 AM",
    arrivalTime: "01:00 PM",
  },
  // Add more train objects
];

export function getAllTrains() {
  return new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(trains);
    }, 1000);
  });
}

export function getTrainById(id) {
  return new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
      const train = trains.find((train) => train.id === Number(id));
      if (train) {
        resolve(train);
      } else {
        reject(new Error("Train not found"));
      }
    }, 1000);
  });
}
