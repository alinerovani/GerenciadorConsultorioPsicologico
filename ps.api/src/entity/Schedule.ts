import { BaseEntity } from "./BaseEntity";
import { Entity, Column, Double, ManyToOne } from "typeorm";
import User from "./User";
import ClinicRoom from "./ClinicRoom";

enum Status {
    waiting = 1,
    confirmed = 2,
    canceled = 3
  }  

@Entity({ name: 'schedule' })
export default class Schedule extends BaseEntity {

    @Column({ type: 'datetime' })
    start_time: Date;

    @Column({ type: 'datetime' })
    end_time: Date;

    @Column({ type: 'datetime', nullable: true })
    cancel_time: Date;
    
    @Column({ type: "enum", enum: Status })
    status: Status;

    @Column({ type: 'decimal', precision: 5, scale: 2,})
    rental_price: Double;

    @Column()
    userUid: string;

    @ManyToOne(type => User, user => user.schedules)
    user: User;

    @Column()
    roomUid: string;

    @ManyToOne(type => ClinicRoom, room => room.schedules)
    room: ClinicRoom;

}