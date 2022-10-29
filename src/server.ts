import express from "express";

const app = express();

app.use(morgan('dev')); 
app.use(express.json());
app.get('/teste', (request, response) => {
    return response.json({message: "Hello World!"});
});

app.listen(3333, () => {
  console.log(`Server started on port 3333!`);
}); 

function morgan(arg0: string): any {
    throw new Error("Function not implemented.");
}

