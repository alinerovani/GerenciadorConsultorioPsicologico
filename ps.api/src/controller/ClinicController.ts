import { Request } from 'express';
import { BaseController } from "./BaseController";
import Clinic from '../entity/Clinic';

export class ClinicController extends BaseController<Clinic>{

    constructor() {
        super(Clinic);
    }

    async save(request: Request) {
        let _clinic = <Clinic>request.body;
        super.isRequired(_clinic.name, 'Informe seu nome!');
        super.isRequired(_clinic.situation, 'Informe a situação!');
        super.isRequired(_clinic.bairro, 'Informe seu bairro!');
        super.isRequired(_clinic.address, 'Informe seu endereço!');
        super.isRequired(_clinic.number, 'Informe o numero do endereço!');
        super.isRequired(_clinic.compl, 'Informe o complemento do endereço!');
        super.isRequired(_clinic.state, 'Informe seu estado!');
        super.isRequired(_clinic.city, 'Informe sua cidade!');
        return super.save(_clinic);
    } 
}