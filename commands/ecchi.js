exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setDescription("Je ne veux pas ce genre de commande d'accord ?")
    .setImage("http://i0.kym-cdn.com/photos/images/original/001/014/328/6d7.gif")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}