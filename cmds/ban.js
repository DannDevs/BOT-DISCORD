const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "ban",
    description: "ban",
    aliases: ["ban"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "fall"
        })

        if(!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply("Você não tem permissões para usar este comando.");
	    let msg = args.join(" ");
        let id = args[0]
        if(!id) return message.reply("Você não mencionou um ID.")
        if(isNaN(id)) return message.reply("Isso não é um ID válido.")
        let valor = 1 //Author  Description
        let sql = `UPDATE vrp_users SET banned = '${valor}' WHERE id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setAuthor(`Novo banimento registrado! 
ID Banido: ${id}
Banido pelo Staff: ${message.author.username}`)
			 .addField ('Motivo:',msg)
			.setTimestamp()
			.setImage('https://cdn.discordapp.com/attachments/867240034334801920/871154160106627113/skyperfillogo.png')
            .setColor(`FFFF00`)
			.setFooter('Sky Evolved | Todos os direitos reservados', 'https://cdn.discordapp.com/attachments/867240034334801920/871154160106627113/skyperfillogo.png')
            message.channel.send(embed)
            message.delete()
        })
    }
}