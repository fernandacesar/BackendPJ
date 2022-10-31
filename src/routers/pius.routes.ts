import { request, response, Router } from "express";
import userRoutes from ".";

const piuRouter = Router();

const pius: piu[] = [];

piuRouter.post("/", (request, response) => {
  const { id, iduser, txt } = request.body;

  const users = user.find((user: { id: any }) => user.id === iduser);
  if (!users) {
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

piuRouter.get('/', (resquest, response) => {

  return response.json(pius);

});

piuRouter.get('/:id', (request, response) => {

  const { id } = request.params;
  const piu = pius.find(piu => piu.id === id);

  if (!piu){
      return response.status(404).json({message : "PIU INEXISTENTE"}); 
  }

  response.json(piu);

});

piuRouter.put('/:id', (request, response) => {

  const { id } = request.params;
  const { iduser, txt } = request.body;
  const piuIndex = pius.findIndex(piu => piu.id === id);

  if (piuIndex === -1){
      return response.status(404).json({message : "USUÁRIO INEXISENTE"}); 
  }

  pius[piuIndex].iduser = iduser;
  if(pius.find(piu => piu.iduser === iduser && piu.id !== id)){
      return response.status(400).json({message: "ID NÃO RELACIONADO A ESSE PIU"});
  }
  
  pius[piuIndex].txt = txt;
  if(pius[piuIndex].txt.length > 140){
      return response.status(400).json({message: "LIMITE DE TEXTO EXCEDIDO! O piu deve ter 140 caracteres."})
  }
  pius[piuIndex].dta = new Date();

  return response.status(200).json({message: "PIU EDITADO COM SUCESSO!!"});
})

piuRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  const piuIndex = pius.findIndex(piu => piu.id === id);
  
  if (piuIndex === -1){
      return response.status(404).json({message : "PIU INEXISTENTE"}); 
  }
  pius.splice(piuIndex, 1);
  return response.status(200).json({message: "PIU EXCLUIDO COM SUCESSO!"});
});

export default piuRouter;