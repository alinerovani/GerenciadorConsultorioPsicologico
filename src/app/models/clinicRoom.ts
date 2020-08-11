import { Clinic } from './clinic';
export enum Category {
    Infantil = 1,
    Adulto = 2,
    Misto = 3
}

export class ClinicRoom {

    uid: string;
    name: string;
    description: string;
    category: Category;
    rental_price: number;
    compl: string;
    isActive: boolean = true;
    clinicUid: string;
    clinic: Clinic;
}
