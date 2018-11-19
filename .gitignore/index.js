const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Zafox, !help");
    console.log("Le bot a bien ete connecte")
})

bot.login("NTE0MTU2NDk1MjE1MTMyNjgz.DtSj9g.ujy4kltt4ZZBl63VwyM6fptyo0s");
