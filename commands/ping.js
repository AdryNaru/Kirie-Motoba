
exports.run = (client, message, args) => {
        const Discord = require("discord.js");
        const embed = new Discord.RichEmbed()
        .setColor(0x00FFFF)
        .setDescription("pong Bakaaaaaaa tu trouve ça drole!")
        .setImage("http://i0.kym-cdn.com/photos/images/original/001/014/320/1f6.gif")
      
        message.channel.send({embed}).catch(console.error);
        console.log
    }