export interface Measurement {
  time: Date;
  illumination: number;
  airTemp: number;
  airHumidity: number;
  soilTemp: number;
  soilHumidity: number;
  sensor: string;
}
