// const a prévoir partout //
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// const a ne pas mettre partout //
const fs = require("fs");
const token = process.env.TOKEN

client.on("ready", () => {

	var memberCount = client.users.size;
	var serverCount = client.guilds.size;
		client.user.setGame("la console avec Umaru");
		client.user.setStatus("idle");
	console.log("--------------------------------------");
	console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
});


client.on("message", (message) => {
        //vérification du prefix//
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;
        // const a vérifier si il faut le mettre partout //
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        //commands//
        //ping//
        if (command === 'ping') {
            message.channel.send("pong BAKAAAAAA tu te crois drole");
        } else
        //kirie//
        if (command === 'kirie') {
            message.delete();
            message.channel.send("ne ne ne me parle pas ");
        } else
        //prefix//
        if (command === 'prefix') {
            let newPrefix = message.content.split(" ").slice(1, 2)[0];
            // change le prefix//
            config.prefix = newPrefix;
            message.channel.send("le prefix est changer")
            //save du fichier config//
            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error)
        } else
        // kick //
        if (command === 'kick') {
            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");
            member.kick(reason);
        } else
        // say //
        if (command === 'say') {
            let text = args.slice(0).join(" ");
            message.delete();
            message.channel.send(text);
        } else
        //umaru//
        if (command === 'umaru') {
            message.delete();
            message.channel.send("laisse moi joué avec umaru https://img00.deviantart.net/80a4/i/2016/220/6/e/render_14_kirie_motoba_and_umaru_doma_chibi_by_jadoo_cucheo-dad357t.png" );
        } else
        //cape//
        if (command === 'cape') {
            message.delete();
            message.channel.send("non je n'ai pas volé la cap d'umaru elle me la prete https://tshop.r10s.jp/amiami/cabinet/images/2015/38/goods-00053027.jpg?fitin=330:330" );
        } else
        //cape//
        if (command === 'ecchi') {
            message.delete();
            message.channel.send("Je ne veux pas ce genre de commande d'accord ? http://i0.kym-cdn.com/photos/images/original/001/014/328/6d7.gif" );
        }

        

    
});



client.login(token);