import { User } from '@shared/interfaces/user.interface';

export interface Workspace {
  id: number;
  name: string;
  creatorId: number;
  users: User[];
}
