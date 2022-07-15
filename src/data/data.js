import { faker } from "@faker-js/faker";

const today = new Date();
var labels = [];
var currentTime = today.getHours();

while (labels.length < 24) {
  if (currentTime === "24") {
    // console.log(currentTime, "24");
    currentTime = 0;
    labels.push(currentTime + "am");
  } else if (currentTime > 12) {
    currentTime = currentTime - 12;
    labels.push(currentTime + "pm");
    // console.log("ttttt", currentTime);
  } else {
    labels.push(currentTime + "am");
  }
  currentTime++;
}

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 60 })),
      borderColor: "#4dc0f5",
      backgroundColor: "white",
    },
  ],
};
