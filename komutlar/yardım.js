const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('738959072367476817') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(` • | **${ayarlar.prefix}bot-bilgi** : Botun Bilgilerini Listelersiniz.\n • | **.talep** : Sunucudaki Yetkili Ekibiyle Özel Olarak Oda Oluşturursunuz.\n`)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=738959072367476817&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/e8P8Z5h)`)
        .setFooter(`Death | Bot Sürümü : v0.1 | Varsayılan Prefix : .`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help','h'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};