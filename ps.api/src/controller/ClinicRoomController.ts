import { Request } from 'express';
import { BaseController } from "./BaseController";
import ClinicRoom from '../entity/ClinicRoom';

export class ClinicRoomController extends BaseController<ClinicRoom>{

    constructor() {
        super(ClinicRoom);
    }

    async save(request: Request) {
        let _room = <ClinicRoom>request.body;
        super.isRequired(_room.name, 'Informe o nome!');
        super.isRequired(_room.description, 'Informe a descrição!');
        super.isRequired(_room.category, 'Informe a categoria!');
        super.isRequired(_room.rental_price, 'Informe o preço!');
        return super.save(_room);
    } 
}