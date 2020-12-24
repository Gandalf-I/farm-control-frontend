import { Point } from '@shared/interfaces/point';

export interface Field {
  id?: number;
  name?: string;
  area?: number;
  culture?: number;
  points?: string[];
  sowingDate: string;
  cleaningDate?: string;
  averageYield?: number;
  tempeAcc?: number;
  moistureAcc?: number;
}
