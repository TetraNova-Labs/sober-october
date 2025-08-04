import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar", length: 24 })
  salt: string;

  @Column({ type: "varchar" })
  firstName: string;

  @Column({ type: "varchar" })
  lastName: string;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  constructor(
    email: string,
    password: string,
    salt: string,
    firstName: string,
    lastName: string,
    isActive: boolean,
  ) {
    this.email = email;
    this.password = password;
    this.salt = salt;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
  }
}
