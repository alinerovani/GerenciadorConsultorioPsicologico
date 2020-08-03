import { Request } from 'express';
import { BaseController } from "./BaseController";
import User from '../entity/User';
import { sign } from 'jsonwebtoken';
import * as md5 from 'md5';
import config from "../include/config";

export class UserController extends BaseController<User>{

    constructor() {
        super(User);
    }

    async auth(request: Request) {
        let { email, password } = request.body;
        if (!email || !password) {
            return { 
                status: 400, 
                message: 'Para entrar no sistema informe e-mail e senha!'
            };
        }

        let user = await this.repository.findOne({ email: email, password: md5(password) });
        if (user) {
            let _payload = {
                uid: user.uid,
                name: user.name,
                email: user.email
            }
            return {
                status: 200,
                message: {
                    user: user,
                    token: sign({
                        _payload, 
                        tm: new Date().getTime()
                    }, config.secretKey)
                }
            }
        } 
        else {
            return { 
                status: 404, 
                message: 'Ocorreram erros para efetuar o login!' 
            }
        }
    }

    async save(request: Request) {
        // Conceito de desestruturação
        let { name, category, email, password, telefone, crp } = <User>request.body;
        // Validação dos campos obrigatórios
        super.isRequired(name, 'Informe seu nome!');
        super.isRequired(category, 'Informe sua categoria!');
        super.isRequired(email, 'Informe seu e-mail!');
        super.isRequired(password, 'Informe sua senha!');
        super.isRequired(telefone, 'Informe seu telefone!');
        if(category == 1)
            super.isRequired(crp, 'Informe o CRP!')
        
        let _user = new User();
        _user.name = name;
        _user.category = category;
        _user.email = email;
        _user.telefone = telefone;
        _user.crp = crp;
        if (password)
            _user.password = md5(password);
            
        return super.save(_user);
    }
}