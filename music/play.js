exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setDescription("La commande n'est pas encore faite on fait des tests")
    .setImage("https://78.media.tumblr.com/a5b4dc2f7f08e90e229525352399b2ed/tumblr_p17ajqisHq1tx45yjo1_250.gif")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}