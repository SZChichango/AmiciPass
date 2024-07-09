export default class User {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  dob?: Date;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    id: string,
    name: string,
    username: string,
    email: string,
    dob: Date,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.dob = dob;
    this.password = password;
  }
  
}
