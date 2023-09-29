import { Column, Entity } from "typeorm";

@Entity()
export class ProfileImages {
  @Column({
    primary: true,
    generated: true
  })
  id: number

  @Column('text')
  url: string

}