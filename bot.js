const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', async() => {
var server = "528198698375839749"; // ايدي السررفر
var channel = "528198698375839751";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Spam - Spam - Credit - Credit | سبام - سبام - كريديت - كريديت')
    },1);
})
    client.user.setActivity("What The *****",{type: 'WATCHING'});
})

client.login(process.env.BOT_TOKEN);
