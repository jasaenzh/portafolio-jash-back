import { Skills } from "src/skills/entities/skill";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class ProfileImages {
  @Column({
    primary: true,
    generated: true
  })
  id: number

  @Column()
  name_src: string;

  @Column()
  url: string

  // Relacion la tabla Users
  @OneToMany(() => Skills, (skill) => skill.name_src)
  user: []

}