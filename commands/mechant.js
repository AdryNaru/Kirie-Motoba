exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setDescription("C'est pas beau de se moqué de mon nom bande de méchant")
    .setImage("https://media.giphy.com/media/7NWw0UehgLyBPAHPVT/giphy.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}