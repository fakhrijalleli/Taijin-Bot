const sql = require ("sqlite")
const playlist = sql.open("./playlist.sqlite")
exports.run = async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('empty');
  
  if (args[0] === "save"){
  playlist.add(message.author.id + "fetched")
  console.log(fetched)
    
  console.log(playlist)
  }
  
  










}