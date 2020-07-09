import { Repository, getRepository } from 'typeorm';
import { Request } from 'express';
import { BaseValidation } from '../entity/BaseValidation';
import State from '../entity/State';

export class StateController extends BaseValidation {

    private _repository: Repository<State>;

    constructor() {
        super();
        this._repository = getRepository(State);
    }

    async all() {
        return this._repository.find();
    }

    async one(request: Request) {
        return this._repository.findOne(request.params.id);
    }

}