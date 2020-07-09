import { CityController } from './controller/CityController';
import { StateController } from './controller/StateController';
import { ScheduleController } from './controller/ScheduleController';
import { ClinicRoomController } from './controller/ClinicRoomController';
import { ClinicController } from './controller/ClinicController';
import { UserController } from "./controller/UserController";

export const Routes = [

    //clinicas
    { method: "get", route: "/clinics", controller: ClinicController, action: "all" }, 
    { method: "get", route: "/clinics/:id", controller: ClinicController, action: "one" }, 
    { method: "post", route: "/clinics", controller: ClinicController, action: "save" }, 
    { method: "delete", route: "/clinics/:id", controller: ClinicController, action: "remove"},

    //proprietarios e psicologos
    { method: "get", route: "/users", controller: UserController, action: "all" }, 
    { method: "get", route: "/users/:id", controller: UserController, action: "one" }, 
    { method: "post", route: "/users", controller: UserController, action: "save" }, 
    { method: "delete", route: "/users/:id", controller: UserController, action: "remove"},

    //consultórios
    { method: "post", route: "/clinicrooms", controller: ClinicRoomController, action: "save" }, 
    { method: "delete", route: "/clinicrooms/:id", controller: ClinicRoomController, action: "remove"},

    //agendamentos
    { method: "post", route: "/schedules", controller: ScheduleController, action: "save" }, 
    { method: "delete", route: "/schedules/:id", controller: ScheduleController, action: "remove"},

    //estados
    { method: "get", route: "/states", controller: StateController, action: "all" }, 
    //cidades de um estado
    { method: "get", route: "/cities/:state", controller: CityController, action: "all" }, 


    //todos os consultorios de uma clinica
    { method: "get", route: "/clinics/:clinic/rooms", controller: ClinicRoomController, action: "getRooms" }, 
    
    //agendamento de um usuario
    { method: "get", route: "/schedules/user/:user", controller: ScheduleController, action: "getScheduleUser" }, 

    //agendamento de um consultorio
    { method: "get", route: "/schedules/clinicroom/:room", controller: ScheduleController, action: "getScheduleClinicRoom" }, 

];