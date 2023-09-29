import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class User {

  @Column({
    primary: true,
    generated: true
  })
  id: number

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  birthdate: Date;

  @Column({ nullable: true })
  profileImages?: string;

  @DeleteDateColumn()
  deletedAt: Date;

}
