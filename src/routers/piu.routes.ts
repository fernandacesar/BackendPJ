import { request, response, Router } from "express";
import routes from ".";

const piuRouter = Router();

interface Piu {
  idUser: 0;
  nameUser: string;
  emailUser: string;
  conteudo: string;
  qtLikes: 0;
  piuDate: 0;
}

const pius = [] as Piu[];

piuRouter.post("/", (request, response) => {
  const {idUser, nameUser, emailUser, conteudo, qtLikes, piuDate } = request.body;

  const users = nameUser.find((nameUser: any) => users.id === idUser);
  if (!nameUser) {
    return response.status(404).json({ message: "USUÁRIO INEXSITENTE ID" });
  }

  const piu = new pius (idUser, txt, new Date(), new Date());
  if (piu.txt == null){
      return response.status(400).json({message: "Digite um texto para o Piu!"});
  }
  // const piu = {
  //     nameUser,
  //     emailUser,
  //     conteudo,
  //     qtLikes,
  //     piuDate,
  // } as Piu;

  // pius.push(piu);

  // return response.json(piu);
});

routes.get("/pius", (request, response) => {
  return response.json(pius);
});
