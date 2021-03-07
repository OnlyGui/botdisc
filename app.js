const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

require('./routes/create')(app);


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATH, DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    response.sendStatus(200);
  });
  app.listen(process.env.PORT); // Recebe solicitações que o deixa online
  
  const Discord = require("discord.js"); //Conexão com a livraria Discord.js
  const client = new Discord.Client(); //Criação de um novo Client
  const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
  const fs = require("fs");
  bot.commands = new Discord.Collection();
  fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {

     let props = require(`./commands/${f}`);
     console.log(`Comando ${f} carregado com sucesso.`)
     bot.commands.set(props.help.name, props);

    });
  }); 
// criar um log quando o bot ficar on
bot.on('ready', () => {
     console.log(`O bot ${bot.user.username} está ativado!`);
// setar activity que o bot está vendo o clube da luta     
     bot.user.setActivity("Clube da luta", {type: "WATCHING"}); 
  });
// caso o bot receba dm ou mensagem de outro bot, ignorar  
bot.on('message', message => {
    if(message.author.bot) return; // se uma mensagem for enviada por outro bot, ele irá ignorar
    if(message.channel.type === "dm") return; // caso alguém envie uma dm pro bot ele ignorará

    let prefix = config.prefix
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);

});

  client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token

module.exports = app;
