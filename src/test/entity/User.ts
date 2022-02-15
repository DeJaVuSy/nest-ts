import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserMetadata } from "./UserMetadata";

@Entity("user", { schema: "test" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "firstName", length: 255 })
  firstName: string;

  @Column("varchar", { name: "lastName", length: 255 })
  lastName: string;

  @Column("int", { name: "age" })
  age: number;

  @OneToOne(() => UserMetadata, (userMetadata) => userMetadata.user)
  userMetadata: UserMetadata;
}
