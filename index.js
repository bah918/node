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

/*app.get("/auteurs/:id/books",(require,response)=>{
    if(require.params.id=="1"){
        response.send("Beowulf")
    }else if(require.params.id=="2"){
        response.send("Hamlet, Othello, Romeo and Juliet, MacBeth")
    }else if(require.params.id=="3/"){
        response.send("Oliver Twist, A Christmas Caro")
    }else if(require.params.id=="4"){
        response.send("The Picture of Dorian Gray, The Importance of Being")
    }else {
        app.get("*", (request, response) => {
            response.send("route non existente");
        }
        )}
})*/
//autres solution pour l'exo2
app.get("/auteurs/:id/books",(require,response)=>{
    const tab=[
        1:"Beowulf",
        2:"Hamlet, Othello, Romeo and Juliet, MacBeth",
        3:"Oliver Twist, A Christmas Caro",
        4:"The Picture of Dorian Gray, The Importance of Being"
    ];
   
    for(let i =0; i<tab.length; i++){
        if(require.params.id==tab[i]){
            response.send(tab[i]);
        }
        app.get("*", (request, response) => {
            response.send("route non existente");
        });
    }
}








