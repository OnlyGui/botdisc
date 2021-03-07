const Discord = require("discord.js")
exports.run = (bot,message,args) => {
    message.channel.send(`Oi, eu sou o bot do ${bot.user.name}`)
}

exports.help = {
    name: "message"
}