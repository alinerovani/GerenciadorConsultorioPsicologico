
import { Entity, Column, Double, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import State from "./State";
import Clinic from "./Clinic";

@Entity({ name: 'city' })
export default class City {

    @PrimaryGeneratedColumn("uuid")
    uid: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @ManyToOne(type => State, state => state.cities)
    state: State;

    @Column()
    stateUid: string;

    @OneToMany(type => Clinic, clinic => clinic.city)
    clinics: Clinic[];

}