
exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setTitle("**COMMANDES**")
    .setAuthor("Kirie", "https://myanimelist.cdn-dena.com/images/characters/12/287024.jpg")
    .setColor(0x00ffff)
    .setDescription("voila mes mes mes commande master")
    .setFooter("je je je je je je humaru-chaaaaan", "https://thumbs.gfycat.com/FlickeringAfraidIcelandichorse-mobile.jpg")
    .setImage("https://pa1.narvii.com/5869/855517d925623a54a04ee47faf60eab436fbbace_hq.gif")
    .setThumbnail("https://78.media.tumblr.com/6727ea99541e535838c33d6ed1daac6b/tumblr_p03ea4ANTy1tx45yjo1_500.gif")
    .setTimestamp()
    .setURL("https://pa1.narvii.com/5959/525c77e26b72512b02dfffa25bf0d7602dd04759_hq.gif ")
    .addField(":computer: **Kirie**",
      "``help``, ``kirie``, ``say``, ``ping``,``invite``,``repos``,``ecchi``,``cape``,``umaru``,``kick``,``prefix``", true)
    .addBlankField(true)
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}