const discord = require('discord.js');
const bot = new discord.Client();

const apresentacao = new discord.MessageEmbed()
    .setAuthor('Feedback', 'https://cdn.discordapp.com/attachments/867240034334801920/871154160106627113/skyperfillogo.png')
    .setColor('#ffff00')
    .setDescription(`Utilize !feedback (feedback)`)

    module.exports = {
        name: "feed",
        description: "feed",
        async execute(bot,message,args) {
            message.delete()
            message.reply(apresentacao)
        }
    }