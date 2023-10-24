const Discord = require("discord.js")
const bot = new Discord.Client();

module.exports = {
    name: "anuncio",
    description: "anuncio",
    aliases: ["anuncio"],
    async execute(bot,message,args) {

        message.delete();
        
        let msg = args.join(" ");
        if (!args[0]) {
            return message.reply(`informe o anuncio!`)
        }  if (msg.length > 9999) {
            return message.reply(`forneça um anuncio de no máximo 9999 caractéres!`)
        }

            var canal = message.guild.channels.cache.get("863175552956760094")
                
                let embed = new Discord.MessageEmbed()
                .setColor('#ffff00')
                .setFooter('Sky Evolved | Todos os direitos reservados', 'https://cdn.discordapp.com/attachments/867240034334801920/871154160106627113/skyperfillogo.png')
                .setTimestamp()
                .setDescription(msg)
                message.channel.send(embed)
           
        }         

}