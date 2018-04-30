
exports.run = (client, message, args) => {
    const config = require("./config.json");
    const fs = require("fs");
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
            // change le prefix//
            config.prefix = newPrefix;
            message.channel.send("le prefix est changer")
            //save du fichier config//
            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error).catch(console.error);
    console.log
}