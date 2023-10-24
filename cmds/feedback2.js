const Discord = require("discord.js")
const bot = new Discord.Client();


module.exports = {
    name: "feed2",
    description: "feed2",
    aliases: ["feed2"],
    async execute(bot,message,args) {

        message.delete();
        
        let msg = args.join(" ");
        if (!args[0]) {
            return message.reply(`informe sua sugestão!`)
        }  if (msg.length > 1000) {
            return message.reply(`forneça uma sugestão de no máximo 1000 caractéres!`)
        }

            var canal = message.guild.channels.cache.get("870319964136046602")
                
                let embed = new Discord.MessageEmbed()
                .setColor('#FFFF00')
                .setAuthor(`Nome do Staff:`)
                .setFooter('Sky Evolved | Todos os direitos reservados', 'https://cdn.discordapp.com/attachments/867240034334801920/871154160106627113/skyperfillogo.png')
                .setTimestamp()
                .setDescription(msg)
                message.channel.send(embed)
            .then(function (message) {
              message.react("✅")
              message.react("🚫")
            }).catch(function() {
              //Otaradasdasdasdasdasdasdsadasdasdsadasdasdasd
             });

	}
}