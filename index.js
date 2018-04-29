// const a prévoir partout //
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// const a ne pas mettre partout //
const fs = require("fs");
const token = process.env.TOKEN


client.on("message", (message) => {
        //vérification du prefix//
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;
        // const a vérifier si il faut le mettre partout //
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
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
        } else
        // kick //
        if (command === 'kick') {
            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");
            member.kick(reason);
        } else
        // say //
        if (command === 'say') {
            let text = args.slice(1).join(" ");
            message.delete();
            message.channel.send(text);
        }

        

    
});



client.login(token);