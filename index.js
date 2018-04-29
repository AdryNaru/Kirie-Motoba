const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.josn");
const fs = require("fs");
const token = process.env.TOKEN

//pour le prefix//
let prefix = "k!"


client.on("message", (message) => {
        //vérification du prefix//
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;

        //commands//
        //ping//
        if (message.content.startsWith(config.prefix + "ping")) {
            message.channel.send("pong connard tu te crois drole");
        } else
        //kirie//
        if (message.content.startsWith(config.prefix + "kirie")) {
            message.channel.send("ne ne ne me parle pas ");
        }
        //prefix//
        if (message.content.startsWith(config.prefix + "prefix")) {
            let newPrefix = message.content.split(" ").slice(1, 2)[0];
            // change le prefix//
            config.prefix = newPrefix;
            //save du fichier config//
            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error)
        }
    
});



client.login(token);