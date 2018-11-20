exports.run = (client, message, args, ops) => {
  
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send('no music');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You have to be in a voice channel to use this command');
    
    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('between 0 and 200');
    
    fetched.dispatcher.setVolume(args[0]/100);
    
    message.channel.send(`Volume : ${args[0]}`)
    
    
    
    
  
  
  
  
  
  
  
  }