import { Request } from 'express';
import { BaseController } from "./BaseController";
import Schedule from '../entity/Schedule';

export class ScheduleController extends BaseController<Schedule>{

    constructor() {
        super(Schedule);
    }

    async save(request: Request) {
        let _schedule = <Schedule>request.body;
        super.isRequired(_schedule.date_schedule, 'Informe a data!');
        super.isRequired(_schedule.start_time, 'Informe a hora de início!');
        super.isRequired(_schedule.end_time, 'Informe a hora final!');
        super.isRequired(_schedule.status, 'Informe o status!');
        super.isRequired(_schedule.rental_price, 'Informe o preço!');
        return super.save(_schedule);
    } 
}