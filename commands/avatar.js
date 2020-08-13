module.exports = {
    name: 'avatar',
    description: 'grab a users avatar',
    guildOnly: true,
    execute(message, args) {
        const taggedUser = message.mentions.users.first();

        return message.channel.send(`${taggedUser.username}'s Avatar <${taggedUser.displayAvatarURL({ format: "png", dynamic: true })}>`);

    },
};