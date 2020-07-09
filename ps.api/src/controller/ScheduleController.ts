import { Request } from 'express';
import { BaseController } from "./BaseController";
import Schedule from '../entity/Schedule';

export class ScheduleController extends BaseController<Schedule>{

    constructor() {
        super(Schedule);
    }

    async save(request: Request) {
        let _schedule = <Schedule>request.body;
        super.isRequired(_schedule.start_time, 'Informe a data e hora de início!');
        super.isRequired(_schedule.end_time, 'Informe a data e hora final!');
        super.isRequired(_schedule.status, 'Informe o status!');
        super.isRequired(_schedule.rental_price, 'Informe o preço!');
        super.isRequired(_schedule.userUid, 'Informe o locatario!');
        super.isRequired(_schedule.roomUid, 'Informe o consultório!');
        return super.save(_schedule);
    } 

    async getScheduleUser(request: Request) {
        return super.select({
            where: {
                userUid: request.params.user
            }
        });
    }

    async getScheduleClinicRoom(request: Request) {
        return super.select({
            where: {
                roomUid: request.params.room
            }
        });
    }
}