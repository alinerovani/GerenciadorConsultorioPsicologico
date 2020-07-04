import { BaseEntity } from "./BaseEntity";
import { Entity, Column, Double, ManyToOne, OneToMany } from "typeorm";
import Clinic from "./Clinic";
import Schedule from "./Schedule";

enum Category {
    childish = 1,
    adult = 2,
    both = 3
  }  

@Entity({ name: 'clinic_room' })
export default class ClinicRoom extends BaseEntity {

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 200 })
    description: string;
    
    @Column({ type: "enum", enum: Category })
    category: Category;

    @Column({ type: 'decimal', precision: 5, scale: 2,})
    rental_price: Double;

    @ManyToOne(type => Clinic, clinic => clinic.rooms)
    clinic: Clinic;

    @OneToMany(type => Schedule, schedule => schedule.room)
    schedules: Schedule[];

}