const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

client.on("message", async (message) => {
    if (message.content !== "!button" && message.author.id === config.botOwner) return; 
    let vk = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Vampir & Köylü')
        .setID('vk')
    let dc = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('Doğruluk & Cesaretlik')
        .setID('dc')
    let grt = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel('Gartic.io')
        .setID('gartic')

    message.channel.send('Aşağıdaki menüden istediğiniz permi almak için butona basmanız yeterlidir', { /// İsterseniz değişirsiniz size kalmış bişe 
        buttons: [vk, dc, grt]
    });
});

client.on('clickButton', async (button) => {
    if (button.id === 'vk') {
        if (button.clicker.member.roles.cache.get(config.vk)) {
            await button.clicker.member.roles.remove(config.vk)
            await button.think(true);
            await button.reply.edit("Vampir Köylü Rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.vk)
            await button.think(true);
            await button.reply.edit("Vampir Köylü Rolü üzerinize verildi.")
        }
    }
    if (button.id === 'dc') {
        if (button.clicker.member.roles.cache.get(config.dc)) {
            await button.clicker.member.roles.remove(config.dc)
            await button.think(true);
            await button.reply.edit("Doğruluk Cesaret Rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.dc)
            await button.think(true);
            await button.reply.edit("Doğruluk Cesaret Rolü üzerinize verildi.")
        }

    }
    if (button.id === 'gartic') {
        if (button.clicker.member.roles.cache.get(config.gartic)) {
            await button.clicker.member.roles.remove(config.gartic)
            await button.think(true);
            await button.reply.edit("Gartic.İO Rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.gartic)
            await button.think(true);
            await button.reply.edit("Gartic Rolü üzerinize verildi.")
        }

    }

});


client.login(config.token)

//////////////

let config = {
    "vk": "VK ROL ID",
    "dc": "DC ROL ID",
    "gartic": "GARTIC ROL ID",
    "botOwner": "OWNER ID ",
    "token": "TOKEN ID"
    };