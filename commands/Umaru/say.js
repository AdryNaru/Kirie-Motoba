const Discord = require('discord.js');
const client = new Discord.Client ();
const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
const command = agrs.shift().toLowerCase();

function test(message,prefix,client){
 if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete.catch(O_o=>{});
    message.channel.send(sayMessage);
    
    }
}
    module.exports = say
