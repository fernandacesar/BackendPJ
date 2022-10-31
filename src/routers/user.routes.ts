import { Router } from "express";

const userRouter = Router();

const users = [] as User[];

userRouter.post("/", (request, response) => {
  const { name, nascimento, cpf, telefone } = request.body;

  if (users.find((user) => user.cpf === cpf)) {
    return response
      .status(400)
      .json({ message: "CPF EM JÁ EM USO" });
  }

  const user = new User(
    name,
    nascimento,
    cpf,
    telefone,
    new Date(),
  );

  if (user.name.length === 0) {
    return response.status(400).json({ message: "NOME É OBRIGATÓRIO!" });
  }

  if (user.nascimento.length === 0) {
    return response.status(400).json({ message: "DARA DE NASCIMENTO É OBRIGATÓRIO!" });
  }

  if (user.cpf === null) {
    return response.status(400).json({ message: "CPF É OBRIGATÓRIO!" });
  }

  if (user.cpf.length < 9) {
    return response
      .status(400)
      .json({ message: "CPF INCORRETO!" });
  }

  if (user.telefone.length === 0) {
    return response.status(400).json({ message: "NUMERO DE TELEFONE É OBRIGATÓRIO!!" });
  }

  if (user.telefone.length < 9) {
    return response
      .status(400)
      .json({ message: "TELEFONE INCORRETO!" });
  }

  users.push(user);
  return response.json(user);
});
