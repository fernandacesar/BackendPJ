import { request, response, Router } from "express";
import userRoutes from ".";

const piuRouter = Router();

const piu = [] as Pius[];

piuRouter.post("/", (request, response) => {
  const { id, iduser, txt } = request.body;

  const user = users.find((user: { id: any }) => user.id === iduser);
  if (!user) {
    return response.status(404).json({ message: "ID INEXISTENTE!" });
  }

  const piu = new Pius(iduser, txt, new Date(), new Date());
  if (piu.txt == null) {
    return response
      .status(400)
      .json({ message: "O PIU DEVE ER UM TEXTO, DIGITE!" });
  }

  if (piu.txt.length > 140) {
    return response
      .status(400)
      .json({
        message: "LIMITE DE TEXTO EXCEDIDO! O piu deve ter 140 caracteres.",
      });
  }

  piu.push(piu);
  return response.json(piu);
});
