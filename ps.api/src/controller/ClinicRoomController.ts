import { Request } from 'express';
import { BaseController } from "./BaseController";
import ClinicRoom from '../entity/ClinicRoom';

export class ClinicRoomController extends BaseController<ClinicRoom>{

    constructor() {
        super(ClinicRoom);
    }

    async save(request: Request) {
        let _room = <ClinicRoom>request.body;

        delete _room.clinic;

        super.isRequired(_room.name, 'Informe o nome!');
        super.isRequired(_room.description, 'Informe a descrição!');
        super.isRequired(_room.category, 'Informe a categoria!');
        super.isRequired(_room.rental_price, 'Informe o preço!');
        super.isRequired(_room.clinicUid, 'Informe a clinica!');
        return super.save(_room);
    }

    async allClinicRooms(request: Request) {
        let user_uid = request.userAuth._payload.uid;

        let repository = this.repository;

        return repository.createQueryBuilder('clinic_room')
        .innerJoinAndSelect('clinic_room.clinic', 'clinic')
        .where('clinic.userUid = :userUid', { userUid: user_uid })
        .getMany();
    }

    async getRooms(request: Request) {
        let repository = this.repository;
        return repository.find({
            where: {
                isActive: 1,
                clinicUid: request.params.clinic
            }
        });
    }
}