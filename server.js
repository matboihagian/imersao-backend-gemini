import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante!",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Meu novo projeto de artesanato",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 4,
        descricao: "Receita deliciosa de bolo de chocolate",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 5,
        descricao: "Um pôr do sol incrível",
        imagem: "https://placecats.com/millie/300/150",
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando");
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});