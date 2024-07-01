const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Hola desde Express")
});

const PORT = 3000;

app.listen(PORT, () => console.log('htpp://localhost:${PORT}'));
