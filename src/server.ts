import express from "express";
import morgan from "morgan";
import routes from "./routers";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(routes);

app.get("/teste", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.listen(3333, () => {
  console.log(`Server started on port 3333!`);
});
