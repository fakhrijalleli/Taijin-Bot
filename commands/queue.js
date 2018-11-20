exports.run = async (client, message, args, ops) => {
  
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send('empty queue');
    
    let queue = fetched.queue;
    
    let nowPlaying = queue[0];
    
    let resp = `__**Now Playing__\n  ${nowPlaying.songTitle}  --  Requested By:  ${nowPlaying.requester}*\n\n__queue__\n`;
    
    for (var i=1; i < queue.length; i++) {
      resp += `${i}. ${queue[i].songTitle} -- Requested By:  ${queue[i].requester}\n`;
    }
    message.channel.send(resp);
  
  }