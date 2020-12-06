import { User } from '@shared/interfaces/user.interface';

export interface Workspace {
  name: string;
  creatorId: number;
  users: User[];
}
