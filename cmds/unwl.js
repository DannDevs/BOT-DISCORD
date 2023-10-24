const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "unwl",
    description: "unwl",
    aliases: ["unwl"],
    async execute(bot,message,args) {
        let con = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "fall"
        })

        if(!message.member.hasPermission('MUTE_MEMBERS'))
        return message.reply("Você não tem permissões para usar este comando.");
        let id = args[0]
        if(!id) return message.reply("Você não colocou um ID.")
        let valor = 0
        let sql = `UPDATE vrp_users SET whitelisted = '${valor}' WHERE id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<:Eo_circle_yellow_white_checkmark:871506681799012393> | O ID **${id}** Teve a Whitelist retirada.`)
            .setColor(`ffff00`)
            message.channel.send(embed)
            message.delete()
        })
    }
}