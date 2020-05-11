const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {

    superagent.get('https://nekos.life/api/v2/img/meow')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Random cat")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`meow`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                title: "Something went wrong... :cry:"
            }}));

}

module.exports.help = {
    name: "cat",
    description: "Sends a random cat photo",
    usage: "cat",
    type: "Fun" 
}