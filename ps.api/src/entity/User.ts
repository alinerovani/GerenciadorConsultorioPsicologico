import { BaseEntity } from "./BaseEntity";
import { Entity, Column, Double, OneToMany } from "typeorm";
import Clinic from "./Clinic";
import Schedule from "./Schedule";

enum Category {
  Psychologist = 1,
  Owner = 2
}

@Entity({ name: 'user' })
export default class User extends BaseEntity {

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: "enum", enum: Category })
    category: Category;
    
    @Column({ type: 'varchar', length: 20, nullable: true })
    crp: string;

    @Column({type: 'bigint'})
    telefone: bigint;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'varchar', length: 100})
    password: string;

    @OneToMany(type => Schedule, schedule => schedule.user)
    schedules: Schedule[];

    @OneToMany(type => Clinic, clinic => clinic.user)
    clinics: Clinic[];

}