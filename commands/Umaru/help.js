const Discord = require('discord.js');
const client = new Discord.Client ();

            
            function help(message,prefix,client){
                if (message.content.startsWith(prefix + "help")) {
            const embed = new Discord.RichEmbed()
            .setTitle("**COMMANDES**")
            .setAuthor("Umaru-chan", "http://st.cdjapan.co.jp/pictures/l/13/10/THCS-60061.jpg")
            .setColor(0xFF8000)
            .setDescription("Voici la liste de mes commandes Oni-Chan")
            .setFooter("Vive le cola et les chips! ONI-CHAAAAAAN va m'en acheté tout de suite", "https://image.dhgate.com/0x0/f2/albu/g1/M00/E8/60/rBVaGVZyej6AO5IGAAD4WO09TJQ211.jpg")
            .setImage("http://www.volonte-d.com/temp/ange/umaruchan/umaruchanC.gif")
            .setThumbnail("http://thehypedgeek.com/wp-content/uploads/2015/03/UmaruChan.jpg")
            .setTimestamp()
            .setURL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuui9P39guDu-WBmqpNd8DwnNloZ71REK2vOThm7b7dEEu-JFmQ")
            .addField(":computer: **UMARU**",
              "``help``, ``invite``")
            .addField(":notes: **Musique**", "``disconnect``, ``nowplaying``, ``pause``, ``play``, ``playlist``, ``resume``, ``skip``, ``stop``, ``summon``", true)
            .addBlankField(true)
          
            message.channel.send({embed});

            }}
                    
module.exports = help
