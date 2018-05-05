exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("Bon-bon-bon-boujours a-a-Adry-sama")
    .setImage("http://pa1.narvii.com/6293/9877004fc5527c4ab83780b1f9c4fa174e36f11d_hq.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}