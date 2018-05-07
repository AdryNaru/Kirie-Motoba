exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("C'est pas beau de se moqué de mon nom bande de méchant")
    .setImage("https://img.gifmagazine.net/gifmagazine/images/543130/original.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}