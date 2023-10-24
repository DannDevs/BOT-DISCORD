const discord = require('discord.js');
const bot = new discord.Client();

const apresentacao = new discord.MessageEmbed()
    .setAuthor('Sugestões',)
    .setColor('#ffff00')
    .setDescription(`Utilize !sugerir (sugestão)`)

    module.exports = {
        name: "sug",
        description: "sug",
        async execute(bot,message,args) {
            message.delete()
            message.reply(apresentacao)
        }
    }