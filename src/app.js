import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: 'O Senhor do anéis'
    },
    {
        id: 2,
        titulo: 'O Hobbit'
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.get("/livros", (req, res) => {
    res.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})

export default app;