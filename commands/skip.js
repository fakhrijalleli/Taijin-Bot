exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send('nothing to skip');
    
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You have to be in a voice channel to use this command');
    
    let userCount = message.member.voiceChannel.members.size;
    
    let required = Math.ceil(userCount/2);
    
    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
    
    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`already voted. ${fetched.queue[0].voteSkips.length}/${required} to skip`);
    
    fetched.queue[0].voteSkips.push(message.member.id);
    
    ops.active.set(message.guild.id, fetched);
    
    if (fetched.queue[0].voteSkips.length >= required) {
      message.channel.send('next');
      return fetched.dispatcher.emit('end');
    }
    
    message.channel.send(`already voted.${fetched.queue[0].voteSkips.length}/${required} to skip `)
    
    
  
  
  
  
  
  
  
  
  
  
  }