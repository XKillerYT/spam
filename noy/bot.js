const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', async() => {
var server = "510514336536723501"; // ايدي السررفر
var channel = "510514336536723507";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('سبام سبام سبام ( عشان ابي كريديت ) ومو اكثر')
    },1);
    client.user.setActivity("What The *****",{type: 'WATCHING'});
})

client.login(process.env.BOT_TOKEN);
