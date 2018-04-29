// const a prévoir partout //
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var prefix = require("./config.json).prefix


// const a ne pas mettre partout //
const fs = require("fs");
const token = process.env.TOKEN


client.on("message", (message) => {
        //vérification du prefix//
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        //commands//
        //ping//
        if (command === 'ping') {
            message.channel.send("pong BAKAAAAAA tu te crois drole");
        } else
        //kirie//
        if (command === 'kirie') {
            message.channel.send("ne ne ne me parle pas ");
        } else
        //prefix//
        if (command === 'prefix') {
            let newPrefix = message.content.split(" ").slice(1, 2)[0];
            // change le prefix//
            config.prefix = newPrefix;
            message.channel.send("le prefix est changer")
            //save du fichier config//
            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error)
        }
    
});



client.login(token);
