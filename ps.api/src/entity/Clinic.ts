import { BaseEntity } from "./BaseEntity";
import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import ClinicRoom from "./ClinicRoom";
import User from "./User";

@Entity({ name: 'clinic' })
export default class Clinic extends BaseEntity {

    @Column({ type: 'varchar', length: 200 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    state: string;

    @Column({ type: 'varchar', length: 100 })
    city: string;
    
    @Column({ type: 'varchar', length: 100 })
    bairro: string;

    @Column({ type: 'varchar', length: 100 })
    address: string;

    @Column({ type: 'varchar', length: 10 })
    number: string;

    @Column({ type: 'varchar', length: 40 })
    compl: string;

    @OneToMany(type => ClinicRoom, room => room.clinic)
    rooms: ClinicRoom[];

    @ManyToOne(type => User, user => user.clinics)
    user: User;

}