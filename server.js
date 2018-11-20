const economy = require('discord-eco');
const express = require('express');
const app = express();
const Discord = require('discord.js');
const commando = require('discord.js-commando');
const client= new Discord.Client();

var ffmpeg = require('ffmpeg');
var TwitchApi = require('twitch-api');
const prefix ='/';
const fs = require('fs');
const config = require("./config.json");
const ytdl = require('ytdl-core');
const ownerID = 'Ryce'


const active = new Map();


client.on('ready',()=> {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds`); 
  client.user.setActivity('!help');
  
});






client.on('message',message => {
	
	let msg = message.content.toUpperCase();
	let sender=message.author;
	let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
	if (message.channel.type==="dm") return;
  if (!msg.startsWith(prefix)) return;
	if (message.author.bot) return;
 try {
  delete require.cache[require.resolve(`./commands/${cmd}.js`)];
  let ops = {
    ownerID: ownerID,
    active: active
  }
  let commandFile = require(`./commands/${cmd}.js`);
  commandFile.run(client, message, args, ops);

  } catch (e) {
  console.log(e.stack);
  }  finally {
    console.log(`${message.author.tag} used ${cmd}`);}
  if (message.content === prefix+'avatar') {
   
    message.reply(message.author.avatarURL);
  }
});



client.login('NTE0MzY4MzU1MDI1ODEzNTI2.DtXVtA.EGmwf4-OdsNrsEXmEgkPxznmb_8');