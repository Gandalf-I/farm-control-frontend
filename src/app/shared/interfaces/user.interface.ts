export interface User {
  email: string;
  login: string;
  id: string;
  type: UserTypeEnum;
}

export interface UserWitToken extends User {
  token: string;
}

export enum UserTypeEnum {
  User,
  Admin,
}
