
exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setDescription("ne ne ne me parle pas")
    .setImage("https://pa1.narvii.com/6028/55e6fb94f2512b2e600d02dc14ac413861c96de8_hq.gif")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}