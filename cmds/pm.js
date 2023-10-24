const Discord = require("discord.js")
const bot = new Discord.Client();

module.exports = {
    name: "pm",
    description: "pm",
    aliases: ["pm"],
    async execute(bot,message,args) {

        message.delete();
        
        let msg = args.join(" ");
        if (!args[0]) {
            return message.reply(`informe o anuncio pm!`)
        }  if (msg.length > 9999) {
            return message.reply(`forneça um anuncio de no máximo 9999 caractéres!`)
        }

            var canal = message.guild.channels.cache.get("863175552956760094")
                
                let embed = new Discord.MessageEmbed()
                .setColor('#ffff00')
				.setAuthor('Sky Police Departament')
                .setFooter('Sky Evolved | Todos os direitos reservados', 'https://media.discordapp.net/attachments/871164487607132172/871760853786038282/asdsadsadasd.png?width=631&height=631')
                .setTimestamp()
				.setImage('https://media.discordapp.net/attachments/854550597016748083/867568627484983306/fardas.png')
				.setThumbnail('https://media.discordapp.net/attachments/871164487607132172/871760853786038282/asdsadsadasd.png?width=631&height=631')
                .setDescription(msg)
				message.channel.send(embed)
				.then(function (message) {
              message.react("<:Eo_circle_yellow_white_checkmark:871506681799012393>")
            }).catch(function() {
              //Otaradasdasdasdasdasdasdsadasdasdsadasdasdasd
             });
                
           
        }         

}