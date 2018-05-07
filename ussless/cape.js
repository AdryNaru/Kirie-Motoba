exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setDescription("non je n'ai pas volé la cap d'umaru elle me la prete")
    .setImage("https://tshop.r10s.jp/amiami/cabinet/images/2015/38/goods-00053027.jpg?fitin=330:330")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}