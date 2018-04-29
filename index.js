const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.TOKEN;
var prefix = "k!";

client.on("ready", () => {

	var memberCount = client.users.size;
	var serverCount = client.guilds.size;
		client.user.setGame("fait k!help pour mes commandes Oni-chan");
		client.user.setStatus("online");
	console.log("--------------------------------------");
	console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
});



client.on('message', message => {

const help = require("./commands/Umaru/help.js");
const invite = require("./commands/Umaru/invite.js");
const test = require("./commands/Umaru/test.js");

help(message, prefix, client)
invite(message, prefix, client)
test(message, prefix, client)



  });

client.login(token)
