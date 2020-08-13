module.exports = {
    name: 'clear',
    description: 'Clear lines',
    execute(message, args) {
        const amount = parseInt(args[0]);
        message.channel.bulkDelete(amount, true);

    },
};