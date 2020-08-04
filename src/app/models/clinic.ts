import City from 'ps.api/src/entity/City';

export class Clinic {

    uid: string;
    name: string;
    neighborhood: string;
    address: string;
    number: string;
    compl: string;
    isActive: boolean = true;
    cityUid: string;
}
