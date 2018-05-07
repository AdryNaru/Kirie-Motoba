
exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.kick(reason);
    message.channel.send("sort de ma chambre tu n'as rien n'a y faire").catch(console.error);
    console.log
}