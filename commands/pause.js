exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send('The player is already paused');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You have to be in a voice channel to use this command');
    
    if (fetched.dispatcher.paused) return message.channel.send('already paused');
    
    fetched.dispatcher.pause();
    
    message.channel.send('Paused');

  
  
  
  }