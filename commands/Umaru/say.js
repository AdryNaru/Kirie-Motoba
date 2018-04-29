const Discord = require('discord.js');
const client = new Discord.Client ();
const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
const command = agrs.shift().toLowerCase();

    if(command === "say"){
        let text = args.slice(1).join(" ");
        message.delete();
        message.channel.send(text);
    }


    module.exports = say
