import { BaseEntity } from "./BaseEntity";
import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import ClinicRoom from "./ClinicRoom";
import User from "./User";
import City from "./City";

@Entity({ name: 'clinic' })
export default class Clinic extends BaseEntity {

    @Column({ type: 'varchar', length: 200 })
    name: string;
    
    @Column({ type: 'varchar', length: 100 })
    neighborhood: string;

    @Column({ type: 'varchar', length: 100 })
    address: string;

    @Column({ type: 'varchar', length: 10 })
    number: string;

    @Column({ type: 'varchar', length: 40, nullable: true })
    compl: string;

    @OneToMany(type => ClinicRoom, room => room.clinic)
    rooms: ClinicRoom[];

    @Column()
    userUid: string;

    @ManyToOne(type => User, user => user.clinics)
    user: User;

    @Column()
    cityUid: string;

    @ManyToOne(type => City, city => city.clinics)
    city: City;

}