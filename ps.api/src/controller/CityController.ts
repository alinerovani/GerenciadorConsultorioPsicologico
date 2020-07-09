import { Request } from 'express';
import { Repository, getRepository, Like } from 'typeorm';
import { BaseValidation } from '../entity/BaseValidation';
import City from '../entity/City';

export class CityController extends BaseValidation {

    private _repository: Repository<City>;

    constructor() {
        super();
        this._repository = getRepository(City);
    }

    async all(request: Request) {
        return this._repository.find({
            where: { 
                stateUid: request.params.state
            }
        });
    }

    async one(request: Request) {
        return this._repository.findOne(request.params.id);
    }

}