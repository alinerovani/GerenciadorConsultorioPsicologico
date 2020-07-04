import { Repository, getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { BaseValidation } from '../entity/BaseValidation';

export abstract class BaseController<GENERIC_CLASS> extends BaseValidation {

    private _repository: Repository<GENERIC_CLASS>;

    constructor(entity: any) {
        super();
        this._repository = getRepository<GENERIC_CLASS>(entity);
    }

    async all() {
        return this._repository.find({
            where: { 
                isActive: true
            }
        });
    }

    async one(request: Request) {
        return this._repository.findOne(request.params.id);
    }

    async save(model: any) {
        // Se for atualização
        if (model.uid) {
            let _modelRegister = await this._repository.findOne(model.uid);
            // se encontrar o registro, usa o assign para mesclar os dados alterados
            if (_modelRegister) Object.assign(_modelRegister, model);
        }
        if (this.valid())
            return this._repository.save(model);
        else
            return {
                status: 400,
                errors: this.allNotifications
            }
    }

    async remove(request: Request) {
        // não excluímos registros, apenas deixamos inativos
        let _modelRegister: any;
        console.log(request.params.id);
        _modelRegister = await this._repository.findOne(request.params.id);
        if (_modelRegister) _modelRegister.isActive = false;
        return await this._repository.save(_modelRegister);
    }

}