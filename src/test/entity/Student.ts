import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("student", { schema: "test" })
export class Student {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 32 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("varchar", { name: "sex", nullable: true, length: 8 })
  sex: string | null;
}
