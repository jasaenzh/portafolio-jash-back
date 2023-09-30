import { User } from "src/users/entities/user.entities";
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
  @OneToMany(() => User, (user) => user.name_src)
  user: []

}