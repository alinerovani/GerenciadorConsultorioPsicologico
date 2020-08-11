import { Request } from 'express';
import { BaseController } from "./BaseController";
import Clinic from '../entity/Clinic';

export class ClinicController extends BaseController<Clinic>{

    constructor() {
        super(Clinic);
    }

    async save(request: Request) {
        let user_uid = request.userAuth._payload.uid;

        let _clinic = <Clinic>request.body;
        _clinic.userUid = user_uid;

        delete _clinic.user;
        delete _clinic.city;

        super.isRequired(_clinic.name, 'Informe seu nome!');
        super.isRequired(_clinic.neighborhood, 'Informe seu bairro!');
        super.isRequired(_clinic.address, 'Informe seu endereço!');
        super.isRequired(_clinic.number, 'Informe o numero do endereço!');
        super.isRequired(_clinic.cityUid, 'Informe a cidade!');
        super.isRequired(_clinic.userUid, 'Informe o proprietário!');
        return super.save(_clinic);
    }

    async allClinic(request: Request) {
        let user_uid = request.userAuth._payload.uid;

        let repository = this.repository;
        return repository.find({
            where: { 
                userUid: user_uid
            }
        });
    }

    async oneClinic(request: Request) {
        let user_uid = request.userAuth._payload.uid;

        let repository = this.repository;
        return repository.findOne({
            uid: request.params.id,
            userUid: user_uid
        });
    }
}