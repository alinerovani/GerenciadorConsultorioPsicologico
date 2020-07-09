import { Request } from 'express';
import { BaseController } from "./BaseController";
import Clinic from '../entity/Clinic';
import { Like } from 'typeorm';

export class ClinicController extends BaseController<Clinic>{

    constructor() {
        super(Clinic);
    }

    async save(request: Request) {
        let _clinic = <Clinic>request.body;
        super.isRequired(_clinic.name, 'Informe seu nome!');
        super.isRequired(_clinic.neighborhood, 'Informe seu bairro!');
        super.isRequired(_clinic.address, 'Informe seu endereço!');
        super.isRequired(_clinic.number, 'Informe o numero do endereço!');
        super.isRequired(_clinic.cityUid, 'Informe a cidade!');
        super.isRequired(_clinic.userUid, 'Informe o proprietário!');
        return super.save(_clinic);
    }
}