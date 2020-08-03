import { Response, Request } from 'express';
import { verify } from 'jsonwebtoken';
import config from "../include/config";

export default async (req: Request, res: Response, next: Function) => {
    // Buscamos por um TOKEN em algum nível de dados da requisição
    let token = req.query.token || req.headers['x-token-access'] || req.body.token;
    let publicRoutes = <Array<String>>config.publicRoutes;
    let isPublicRoute: boolean = false;
  
    publicRoutes.forEach(url => {
      let isPublic = req.url.includes(url);
      if (isPublic)
        isPublicRoute = true;
    });
  
    if (isPublicRoute)
      next();
    else if (token) {
        try {
            // Guarda as infos de usuário
            let _userAuth = verify(token, config.secretKey);
            req.userAuth = _userAuth;
            // Libera a rota para que o express continue sua execução
            next();
        } catch (error) {
            res.status(401).send({ 
                message: 'Token inválido!' 
            });
            return;
        }
    } else {
        res.status(401).send({ 
            message: 'Serviço disponível apenas para usuário autenticados!'
        });
        return;
    }

}


