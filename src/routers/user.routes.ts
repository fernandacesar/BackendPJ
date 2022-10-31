import { Router } from "express";

const userRouter = Router();

const users = [] as User[];

userRouter.post("/", (request, response) => {
  const { name, nascimento, cpf, telefone } = request.body;

  if (users.find((user) => user.cpf === cpf)) {
    return response.status(400).json({ message: "CPF EM JÁ EM USO" });
  }

  const user = new User (name, nascimento, cpf, telefone, new Date());

  if (user.name.length === 0) {
    return response.status(400).json({ message: "NOME É OBRIGATÓRIO!" });
  }

  if (user.nascimento.length === 0) {
    return response
      .status(400)
      .json({ message: "DARA DE NASCIMENTO É OBRIGATÓRIO!" });
  }

  if (user.cpf === null) {
    return response.status(400).json({ message: "CPF É OBRIGATÓRIO!" });
  }

  if (user.cpf.length < 9) {
    return response.status(400).json({ message: "CPF INCORRETO!" });
  }

  if (user.telefone.length === 0) {
    return response
      .status(400)
      .json({ message: "NUMERO DE TELEFONE É OBRIGATÓRIO!!" });
  }

  if (user.telefone.length < 9) {
    return response.status(400).json({ message: "TELEFONE INCORRETO!" });
  }

  users.push(user);
  return response.json(user);
});

userRouter.get("/", (request, response) => {
  return response.json(users);
});

userRouter.get("/:id", (request, response) => {
  const { id } = request.params;

  const user = users.find((user) => user.id === id);

  if (!user)
    return response.status(404).json({ message: "USUÁRIO INEXISTENTE!" });
  response.json(user);
});

userRouter.put("/:id", (request, response) => {

  const { id } = request.params;
  const { name, nascimento, cpf, telefone } = request.body;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return response.status(404).json({ message: "USUÁRIO INEXISTENTE!" });
  }

  users[userIndex].name = name;

  users[userIndex].nascimento = nascimento;

  if (users.find((user) => user.cpf === cpf && user.id !== id)) {
    return response
      .status(400)
      .json({ message: "CPF JÁ UTILIZADO!" });
  }

  users[userIndex].cpf = cpf;
  users[userIndex].telefone = telefone;
  users[userIndex].dta = new Date();

  return response
    .status(200)
    .json({ massage: "DADOS ATUALIZADOS COM SUCESSO!!" });

});

userRouter.delete('/:id', (request, response) => {

    const { id } = request.params;

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1){
        return response.status(404).json({message : "USUARIO INEXISTENTE"}); 
    }

    users.splice(userIndex, 1);

    return response.status(200).json({message: "USUARIO EXCLUIDO COM SUCESSO!!"});
});

export default userRouter;