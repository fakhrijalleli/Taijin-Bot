const Discord =  require('discord.js');
const Attachment  = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args, ops) => {
    const attachment = new Discord.Attachment('D:/mamsita.png');
       
        message.channel.send(attachment);
    };