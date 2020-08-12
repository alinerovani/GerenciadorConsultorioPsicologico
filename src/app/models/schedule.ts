import { User } from './user';
import { ClinicRoom } from './clinicRoom';

export enum Status {
    waiting = 1,
    confirmed = 2,
    canceled = 3
  }  

export class Schedule {

    uid: string;
    start_time: Date;
    end_time: Date;
    cancel_time: Date;
    status: Status;
    rental_price: number;
    userUid: string;
    user: User;
    roomUid: string;
    room: ClinicRoom;
}
