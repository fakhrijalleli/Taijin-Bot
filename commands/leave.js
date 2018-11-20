exports.run = async (client, message, args, ops) => {
    message.guild.me.voiceChannel.leave();
    message.channel.send('leaving ....')
};
