exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setDescription("laisse moi joué avec umaru")
    .setImage("https://img00.deviantart.net/80a4/i/2016/220/6/e/render_14_kirie_motoba_and_umaru_doma_chibi_by_jadoo_cucheo-dad357t.png")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}