const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const token = process.env.TOKEN

client.on("ready", () => {

	var memberCount = client.users.size;
	var serverCount = client.guilds.size;
		client.user.setGame("la console avec Umaru");
		client.user.setStatus("idle");
	console.log("Prete au travaille maître");
	console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./commands/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !==0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try { 
        let commandfile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);

        } catch (err) {
            console.error(err);
        }
    });



client.login(token);