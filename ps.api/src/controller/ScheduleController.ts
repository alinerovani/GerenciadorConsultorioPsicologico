import { Request } from 'express';
import { BaseController } from "./BaseController";
import Schedule from '../entity/Schedule';

export class ScheduleController extends BaseController<Schedule>{

    constructor() {
        super(Schedule);
    }

    async save(request: Request) {
        let _schedule = <Schedule>request.body;

        delete _schedule.user;
        delete _schedule.room;

        super.isRequired(_schedule.start_time, 'Informe a data e hora de início!');
        super.isRequired(_schedule.end_time, 'Informe a data e hora final!');
        super.isRequired(_schedule.status, 'Informe o status!');
        super.isRequired(_schedule.rental_price, 'Informe o preço!');
        super.isRequired(_schedule.userUid, 'Informe o locatario!');
        super.isRequired(_schedule.roomUid, 'Informe o consultório!');
        return super.save(_schedule);
    } 

    async getScheduleUser(request: Request) {
        let repository = this.repository;

        return repository.find({
            where: {
                userUid: request.params.user
            },
            relations: ["room", "room.clinic"]
        });
    }

    async getScheduleClinicRoom(request: Request) {
        let repository = this.repository;

        return repository.find({
            where: {
                roomUid: request.params.room
            }
        });
    }

    async allSchedulePending(request: Request) {
        let user_uid = request.userAuth._payload.uid;

        let repository = this.repository;
        return repository.createQueryBuilder('schedule')
        .innerJoinAndSelect("schedule.room", "room")
        .innerJoinAndSelect("room.clinic", "clinic")
        .innerJoinAndSelect("schedule.user", "user")
        .where('schedule.status = :status AND clinic.userUid = :userUid', { status: 1, userUid: user_uid })
        .getMany();
    }
}