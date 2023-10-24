const Discord = require("discord.js")
const bot = new Discord.Client();


module.exports = {
    name: "feedback",
    description: "feedback",
    aliases: ["feedback"],
    async execute(bot,message,args) {

        message.delete();
        
        let msg = args.join(" ");
        if (!args[0]) {
            return message.reply(`informe seu feedback!`)
        }  if (msg.length > 1000) {
            return message.reply(`forneça um feedback de no máximo 1000 caractéres!`)
        }

            var canal = message.guild.channels.cache.get("870806129242931219")
                
                let embed = new Discord.MessageEmbed()
                .setColor('#FFFF00')
                .setAuthor(`Feedback de ${message.author.username}`, `${message.author.displayAvatarURL(dynamic = true, size = 2048)}`)
                .setFooter('Sky Evolved | Todos os direitos reservados', 'https://cdn.discordapp.com/attachments/867240034334801920/871154160106627113/skyperfillogo.png')
                .setTimestamp()
                .setDescription(msg)
                message.channel.send(embed)
            
    		
			 
            let embedo = new Discord.MessageEmbed()
            .setTitle(`Obrigado pelo seu feedback, a staff agradece ${message.author.username}`)
            .setColor('#FFFF00')
            .setAuthor('Sky Evolved', 'https://cdn.discordapp.com/attachments/867240034334801920/871154160106627113/skyperfillogo.png')
            .addField(`Veja sobre seu FeedBack no Canal`, `<#870806129242931219>`)
            .setFooter('Sky Evolved | Todos os direitos reservados', 'https://cdn.discordapp.com/attachments/867240034334801920/871154160106627113/skyperfillogo.png')
            .setTimestamp()
            message.author.send(embedo)
			 
	}
}