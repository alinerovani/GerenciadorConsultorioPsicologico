import { ScheduleController } from './controller/ScheduleController';
import { ClinicRoomController } from './controller/ClinicRoomController';
import { ClinicController } from './controller/ClinicController';
import { UserController } from "./controller/UserController";

export const Routes = [
    { method: "get", route: "/users", controller: UserController, action: "all" }, 
    { method: "get", route: "/users/:id", controller: UserController, action: "one" }, 
    { method: "post", route: "/users", controller: UserController, action: "save" }, 
    { method: "delete", route: "/users/:id", controller: UserController, action: "remove"},

    
];