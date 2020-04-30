const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
let color = ((1 << 24) * Math.random() | 0).toString(16);
    if (!message.mentions.users.size) {     
        let embed = new Discord.RichEmbed()
          .setColor(`#${color}`);
          .setAuthor(message.author.username + "'s Avatar", message.author.displayAvatarURL)
          .setImage(message.author.displayAvatarURL)  
        
        message.channel.send(embed)
    }

    const avatarList = message.mentions.users.map(user => {
        return `${user.username},${user.displayAvatarURL}`;
    });

    for (var i = 0; i < avatarList.length; i++) {
        let Username = avatarList[i].split(',')[0];
        let AvatarURL = avatarList[i].split(",").pop();

        let embed = new Discord.RichEmbed()
          .setColor(`#${color}`);
          .setAuthor(Username + "'s Avatar", AvatarURL)
          .setImage(AvatarURL)
        
        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "avatar",
    description: "Gets user's avatar from a mention",
    usage: "avatar <mention>",
    type: "Utility"
}
