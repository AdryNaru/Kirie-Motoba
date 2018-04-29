const Discord = require('discord.js');
const client = new Discord.Client ();

            
            function help(message,prefix,client){
                if (message.content.startsWith(prefix + "help")) {
            const embed = new Discord.RichEmbed()
            .setTitle("**COMMANDES**")
            .setAuthor("Kirie", "https://myanimelist.cdn-dena.com/images/characters/12/287024.jpg")
            .setColor(#58FAF4)
            .setDescription("voila mes mes mes commande master")
            .setFooter("je je je je je je humaru-chaaaaan", "https://thumbs.gfycat.com/FlickeringAfraidIcelandichorse-mobile.jpg")
            .setImage("https://pa1.narvii.com/5959/525c77e26b72512b02dfffa25bf0d7602dd04759_hq.gif")
            .setThumbnail("https://pa1.narvii.com/6028/55e6fb94f2512b2e600d02dc14ac413861c96de8_hq.gif")
            .setTimestamp()
            .setURL("https://pa1.narvii.com/5869/855517d925623a54a04ee47faf60eab436fbbace_hq.gif")
            .addField(":computer: **Kirie**",
              "``help``, ``invite``")
            .addField(":notes: **Musique**", "``disconnect``, ``nowplaying``, ``pause``, ``play``, ``playlist``, ``resume``, ``skip``, ``stop``, ``summon``", true)
            .addBlankField(true)
          
            message.channel.send({embed});

            }}
                    
module.exports = help
