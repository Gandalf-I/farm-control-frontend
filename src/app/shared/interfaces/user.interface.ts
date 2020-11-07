export interface IUser {
  email: string;
  login: string;
  id: string;
}

export interface IUserWitToken extends IUser {
  token: string;
}
