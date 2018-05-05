exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setTitle("**INVITE**")
    .setAuthor("Kirie", "https://pa1.narvii.com/5959/525c77e26b72512b02dfffa25bf0d7602dd04759_hq.gif")
    .setColor(0x00ffff)
    .setDescription("que que que tu veux veux m'invité ?")
    .setThumbnail("https://pa1.narvii.com/6286/a93f765e19d27337eb6e3315372f183b4c35ba27_hq.gif")
    .setTimestamp()
    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=440036538110312448&permissions=8&scope=bot")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}