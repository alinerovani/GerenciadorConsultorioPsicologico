import { CityController } from './controller/CityController';
import { StateController } from './controller/StateController';
import { ScheduleController } from './controller/ScheduleController';
import { ClinicRoomController } from './controller/ClinicRoomController';
import { ClinicController } from './controller/ClinicController';
import { UserController } from "./controller/UserController";

export const Routes = [

    /*
    rota para cadastrar consultorio
    rota para consultar consultorio
    rota para remover consultorio

    rota para consultar agendamentos
    rota para cadastrar agendamento

    rota para relatorio
    */

    //clinicas x proprietario
    { method: "get", route: "/clinics", controller: ClinicController, action: "allClinic" }, 
    { method: "get", route: "/clinics/:id", controller: ClinicController, action: "oneClinic" }, 
    { method: "post", route: "/clinics", controller: ClinicController, action: "save" }, 
    { method: "delete", route: "/clinics/:id", controller: ClinicController, action: "remove"},

    //TODAS as clinicas ativas

    //consultórios
    { method: "get", route: "/clinicrooms", controller: ClinicRoomController, action: "allClinicRooms" }, 
    { method: "post", route: "/clinicrooms", controller: ClinicRoomController, action: "save" }, 
    { method: "delete", route: "/clinicrooms/:id", controller: ClinicRoomController, action: "remove"},
    //todos os consultorios de uma clinica
    { method: "get", route: "/clinics/:clinic/rooms", controller: ClinicRoomController, action: "getRooms" }, 

    //proprietarios e psicologos
    //{ method: "get", route: "/users", controller: UserController, action: "all" }, 
    { method: "get", route: "/users/:id", controller: UserController, action: "one" }, 
    { method: "post", route: "/users", controller: UserController, action: "save" }, 
    { method: "delete", route: "/users/:id", controller: UserController, action: "remove"},
    { method: "post", route: "/auth", controller: UserController, action: "auth" }, 

    //agendamentos
    { method: "post", route: "/schedules", controller: ScheduleController, action: "save" }, 
    { method: "delete", route: "/schedules/:id", controller: ScheduleController, action: "remove"},
    { method: "get", route: "/schedules/user/:user", controller: ScheduleController, action: "getScheduleUser" }, 
    { method: "get", route: "/schedules/clinicroom/:room", controller: ScheduleController, action: "getScheduleClinicRoom" }, 

    //estados
    { method: "get", route: "/states", controller: StateController, action: "all" }, 
    //cidades de um estado
    { method: "get", route: "/cities/:state", controller: CityController, action: "all" }, 

];