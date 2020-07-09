
import { Entity, Column, Double, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import City from "./City";

@Entity({ name: 'state' })
export default class State {

    @PrimaryGeneratedColumn("uuid")
    uid: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 10 })
    abbreviation: string;

    @OneToMany(type => City, city => city.state)
    cities: City[];

}