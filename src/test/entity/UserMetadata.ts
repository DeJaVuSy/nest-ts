import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("user_metadata", { schema: "test" })
export class UserMetadata {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "height" })
  height: number;

  @Column("int", { name: "width" })
  width: number;

  @Column("varchar", { name: "orientation", length: 255 })
  orientation: string;

  @Column("tinyint", { name: "compressed" })
  compressed: number;

  @Column("varchar", { name: "comment", length: 255 })
  comment: string;

  @OneToOne(() => User, (user) => user.userMetadata, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;
}
