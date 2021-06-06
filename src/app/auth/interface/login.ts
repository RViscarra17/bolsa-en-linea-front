export interface Login {
  email: string;
  password: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role?: Role;
}

export interface Role {
  id: number;
  name: string;
}

export interface UserR {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string,
  password_confirm: string
  role: number;
}
