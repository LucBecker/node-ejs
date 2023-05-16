const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        { 
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa javaScript para rederizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "mada linguagem"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de paginas HTML utlizando JavaScript";
    res.render("pages/index",{
        qualitys: items,
        subtitle: subtitle,
    });
} )

app.get("/sobre", function(req, res){
    res.render("pages/about");
} )

app.listen(8080);
console.log("Rodando na porta 8080");