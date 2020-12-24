export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const airTemp = {
  labels: months,
  datasets: [
    {
      label: 'Average air temperature',
      data: [-5, -10, -1, 12, 20, 23, 25, 22, 15, 9, 4, -2],
      fill: true,
      borderWidth: 2,
      borderColor: 'blue',
    },
  ],
};

export const airHumidity = {
  labels: months,
  datasets: [
    {
      label: 'Average air humidity',
      data: [40, 50, 45, 55, 60, 50, 30, 35, 33, 52, 57, 59],
      fill: true,
      borderWidth: 2,
      borderColor: 'blue',
    },
  ],
};

export const soilTemp = {
  labels: months,
  datasets: [
    {
      label: 'Average soil temperature',
      data: [40, 50, 45, 55, 60, 50, 30, 35, 33, 52, 57, 59],
      fill: true,
      borderWidth: 2,
      borderColor: 'blue',
    },
  ],
};

export const soilHumidity = {
  labels: months,
  datasets: [
    {
      label: 'Average air humidity',
      data: [40, 50, 45, 55, 60, 50, 30, 35, 33, 52, 57, 59],
      fill: true,
      borderWidth: 2,
      borderColor: 'blue',
    },
  ],
};
