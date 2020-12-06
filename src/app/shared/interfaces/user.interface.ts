export interface User {
  email: string;
  login: string;
  id: string;
}

export interface UserWitToken extends User {
  token: string;
}
