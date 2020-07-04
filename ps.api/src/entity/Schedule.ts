import { BaseEntity } from "./BaseEntity";
import { Entity, Column, Double, ManyToOne } from "typeorm";
import User from "./User";
import ClinicRoom from "./ClinicRoom";

@Entity({ name: 'schedule' })
export default class Schedule extends BaseEntity {

    @Column({ type: 'datetime' })
    start_time: Date;

    @Column({ type: 'datetime' })
    end_time: Date;
    
    @Column()
    status: number;

    @Column({ type: 'decimal', precision: 5, scale: 2,})
    rental_price: Double;

    @ManyToOne(type => User, user => user.schedules)
    user: User;

    @ManyToOne(type => ClinicRoom, room => room.schedules)
    room: ClinicRoom;

}