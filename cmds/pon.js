const Discord = require("discord.js")
const Gamedig = require('gamedig');

module.exports = {
    name: "pon",
    description: "pon",
    aliases: ["pon"],
    async execute(bot,message,args) {

        Gamedig.query({
            type: 'fivem',
            host: '34.95.208.155',
            port: '30120'
        }).then((state) => {
            let online = state.raw.clients
            let embed = new Discord.MessageEmbed()
            .setDescription(`<:Eo_circle_yellow_white_checkmark:871506681799012393> - Atualmente tem ${online} jogadores online.`)
            .setColor(`ffff00`)
            message.channel.send(embed)
            message.delete()
        }).catch((error) => {
            let embed = new Discord.MessageEmbed()
            .setDescription(`<:190406:871220828610633768> - O servidor está offline.`)
            .setColor(`ffff00`)
            message.channel.send(embed)
            message.delete()
        });
    }
}