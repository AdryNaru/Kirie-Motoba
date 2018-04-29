const Discord = require("discord.js");
const client = new Discord.client();
const token = process.env.TOKEN;

//pour le prefix//
let prefix = "k!"


client.on("message", (message) => {
        //vérification du prefix//
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        //commands//
        if (message.content.startsWith(prefix + ping)) {
            message.channel.send("pong connard tu te crois drole");
        } else

        if (message.content.startsWith(prefix + "kirie")) {
            message.channel.send("ne ne ne me parle pas ");
        }
});



client.login(token)