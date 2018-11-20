exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send('nothing to resume');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You have to be in a voice channel to use this command');
    
    if (!fetched.dispatcher.paused) return message.channel.send('The player is not paused');
    
    fetched.dispatcher.resume();
    
    message.channel.send(`Resuming : ${fetched.queue[0].songTitle}`);
  
  
  
  
  }