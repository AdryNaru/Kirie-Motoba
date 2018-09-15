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
	console.log("Je suis Online");
	console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
});
// dossier commands //
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    console.log
    files.forEach(file => {
        console.log
        let eventFunction = require(`./commands/${file}`);
        console.log
        let eventName = file.split(".")[0];
        console.log
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
        console.log
    });
});
// dossier music //
fs.readdir("./music/", (err, files) => {
    if (err) return console.error(err);
    console.log
    files.forEach(file => {
        console.log
        let eventFunction = require(`./music/${file}`);
        console.log
        let eventName = file.split(".")[0];
        console.log
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
        console.log
    });
});

// dossier ussless //
fs.readdir("./ussless/", (err, files) => {
    if (err) return console.error(err);
    console.log
    files.forEach(file => {
        console.log
        let eventFunction = require(`./ussless/${file}`);
        console.log
        let eventName = file.split(".")[0];
        console.log
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
        console.log
    });
});

client.on("message", (message) => {
    console.log
    if (message.author.bot) return;
    console.log
    if (message.content.indexOf(config.prefix) !==0) return;
    console.log
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // dossier commands//
    try { 
        console.log
        let commandFile = require(`./commands/${command}.js`);
        console.log
        commandFile.run(client, message, args);
        console.log

        } catch (err) {
            message.delete();
            message.channel.send("Je je je ne connait pas cette commande")
            console.error(err);
            console.log
        }
    // dossier music//
    try { 
        console.log
        let commandFile = require(`./music/${command}.js`);
        console.log
        commandFile.run(client, message, args);
        console.log

        } catch (err) {
            console.error(err);
            console.log
        }
    // dossier ussless//
    try { 
        console.log
        let commandFile = require(`./ussless/${command}.js`);
        console.log
        commandFile.run(client, message, args);
        console.log
    
        } catch (err) {
            console.error(err);
            console.log
        }
    });



client.login(token);