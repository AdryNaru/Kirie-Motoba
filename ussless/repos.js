
exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setDescription("Il faut que j'aille m'occuper de Umaru-chan désoler")
    .setImage("https://78.media.tumblr.com/3b2f19dbf1e7b9c6ffaecfc7388a6fb1/tumblr_oy914zzmQs1tm1dgio6_r1_500.gif")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}