const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  var members = [];
  
  message.guild.members.forEach((member) => {
    if (!member.user.bot)
      members.push(member);  
  });
  
  var randomUser = members[Math.floor(Math.random() * members.length)];
  
  await message.channel.send({embed: {
                    color: RANDOM,
                    title: "Someone has been summoned (╯°□°）╯︵ ┻━┻:"
                }})
message.channel.send(`(${randomUser})`);
}

module.exports.help = {
    name: "someone",
    description: "Pick a random member from the server",
    usage: "someone",
    type: "Utility"   
}