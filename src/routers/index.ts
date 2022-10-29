import { response, Router } from "express";
import { uuid } from "uuidv4";

const routes = Router();

interface User {
  id: string;
  name: string;
  email: string;
}

const users = [] as User[];

routes.post("/users", (request, response) => {
  const { name, email } = request.body;

  if (users.find(user => user.email === email))
    return response
      .status(400)
      .json({ message: "user with this email already exists" });

  const user = {
    id: uuid(),
    name,
    email,
  } as User;

  users.push(user);

  return response.json(user);
});

routes.get("/users", (request, response) => {
  return response.json(users);
});

routes.get("/users/:id", (request, response) => {
  const { id } = request.params;

  const user = users.find(user => user.id === id);

  if(!user) return response.status(404).json({message: "User not found"});
});

export default routes;
