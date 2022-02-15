import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("person", { schema: "official" })
export class Person {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("varchar", { name: "sex", nullable: true, length: 1 })
  sex: string | null;

  @Column("int", { name: "height", nullable: true })
  height: number | null;

  @Column("int", { name: "weight", nullable: true })
  weight: number | null;
}
