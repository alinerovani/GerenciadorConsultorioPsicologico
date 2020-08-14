import "reflect-metadata";
import { createConnection, Repository, getRepository } from "typeorm";
import * as express from "express";
import * as cors from 'cors';
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import config from "./include/config";
import auth from './middleware/auth';
import State from "./entity/State";
import City from "./entity/City";

// create express app
const app = express();

app.use(cors());
app.options('*', cors())

app.use(bodyParser.json());

app.use(auth);

// register express routes from defined application routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

app.listen(config.port, '0.0.0.0', async () => {
    console.log("API FUNCIONANDO");
    try {
        await createConnection();

        //Verifica se o estado do RS ainda não está cadastrado
        //Se não estiver, insere o registro no banco
        let stateRepository = getRepository(State);
        let stateRS = await stateRepository.findOne({ name: "Rio Grande do Sul" });
        var estadoUid = "";

        if (stateRS) {
            estadoUid = stateRS.uid;
        } else {
            let estado = new State();
            estado.name = "Rio Grande do Sul";
            estado.abbreviation = "RS";

            await stateRepository
                .save(estado)
                .then(estado => {
                    estadoUid = estado.uid;
                });
        }

        //Verifica se a cidade de Passo Fundo ainda não está cadastrada
        //Se não estiver, insere o registro no banco
        let cityRepository = getRepository(City);
        let cityPF = await cityRepository.findOne({ name: "Passo Fundo" });

        if (!cityPF) {
            let cidade = new City();
            cidade.name = "Passo Fundo";
            cidade.stateUid = estadoUid;

            await cityRepository
                .save(cidade);
        };

        console.log("CONECTOU COM O BANCO DE DADOS");
    } catch (error) {
        console.error(`Erro conectar banco de dados ${error}`)
    }
});