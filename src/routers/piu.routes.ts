import { request, response, Router } from "express";
import routes from ".";


const piuRouter = Router();

interface Piu {
  nameUser: string,
  emailUser: string,
  conteudo: string,
  qtLikes: 0,
  piuDate: 0;
}

const pius = [] as Piu[];

routes.post("/pius", (request: { body: { nameUser: any; emailUser: any; conteudo: any; qtLikes: any; piuDate: any; }; }, response: { json: (arg0: Piu) => any; }) => {

    const { nameUser, emailUser, conteudo, qtLikes, piuDate } = request.body;

    const piu = {
        nameUser,
        emailUser, 
        conteudo, 
        qtLikes, 
        piuDate,
    } as Piu;

    pius.push(piu); 

    return response.json(piu); 
});

routes.get("/pius", (request, response) => {
    return response.json(pius);
});