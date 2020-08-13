module.exports = {
    name: 'kick',
    description: 'kick a user',
    guildOnly: true,
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const member = message.mentions.members.first();

        message.channel.send(`${taggedUser.username} was kicked.`);
        member.kick();
    },
};