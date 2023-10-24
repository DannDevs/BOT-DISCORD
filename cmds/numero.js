const Discord = require("discord.js")
const mysql = require("mysql")

module.exports = {
    name: "numero",
    description: "numero",
    aliases: ["numero"],
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
        if(!id) return message.reply("Você não colocou o ID.")
        if(isNaN(id)) return message.reply("Isso não é um ID Válido, Tem que ser um número.")
        let numero = args[1]
        if(!numero) return message.reply("Você não colocou um numero de telefone.")
        if (numero.length > 4) return message.reply("Só pode 4 digitos")
        if(isNaN(numero)) return message.reply("Isso não é um numero Válido, precisa ser Números.")
        let sql = `UPDATE vrp_user_identities SET phone = '${numero}' WHERE user_id = '${id}'`
        con.query(sql, function (err, result) {
            if (err) throw err;
            let embed = new Discord.MessageEmbed()
            .setDescription(`<:Eo_circle_yellow_white_checkmark:871506681799012393> | O Número do ID **${id}** foi alterado para **${numero}**`)
            .setColor(`FFFF00`)
            message.delete()
            message.channel.send(embed)
        })
    }
}