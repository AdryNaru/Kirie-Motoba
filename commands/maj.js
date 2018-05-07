exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setDescription("On n'a enfin une maj de faite")
    .setImage("https://media.giphy.com/media/fGR0AL2DhNODnOgEUG/giphy.gif")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}