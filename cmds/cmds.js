const Discord = require("discord.js")

module.exports = {
    name: "cmd",
    description: "cmd",
    aliases: ["cmd"],
    async execute(bot,message,args) {
        let embed = new Discord.MessageEmbed()
        .setDescription('``!ban`` **ID** **Motivo:**\n\
**Discord:** \n``!numero`` **ID** **Numero**\n``!unban`` **ID**\n``!unwl`` **ID**\n``!wl`` **ID**\n``!feed`` **em #📬・avaliar-staff**\n``!feedback`` **+ avaliação**\n``!sug`` **em 💡・sugestão**\n``!sugerir`` **+ segestão**\n``!anuncio`` **+ anuncio**')
		.setColor(`ffff00`)
		message.pin()
        message.channel.send(embed)
        message.delete()
    }
}