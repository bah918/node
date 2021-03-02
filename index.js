const { response } = require('express');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
    response.send("Authors API");
})
app.get("/auteurs/1/", (request, response) => {
    response.send("Lawrence Nowell, UK");
})
app.get("/authors/2/", (request, response) => {
    response.send("William Shakespeare, UK");
})
app.get("/authors/3/", (request, response) => {
    response.send("Charles Dickens, US");
})
app.get("/authors/4/", (request, response) => {
    response.send("Oscar Wilde, UK");
})

app.listen(8000, () => {
    console.log("Serveur lancé");
})
//Exercice 2 

//autres solution pour l'exo2
app.get("/auteurs/:id/books",(require,response)=>{
    const tab=[{id:1, books: "Beowulf", authors:"Lawrence Nowell, UK"},
        {id:2,books:"Hamlet, Othello, Romeo and Juliet, MacBeth", authors:"William Shakespeare, UK"},
        {id:3,books:"Oliver Twist, A Christmas Caro",auteurs:"Charles Dickens, US"},
       {id:4,books:"The Picture of Dorian Gray, The Importance of Being",auteurs:"Oscar Wilde, UK"}
    ];
    tab.filter((elem)=>{
        if(elem.id==require.params.id){
           return (response.send(elem.books));
        }});
    })




