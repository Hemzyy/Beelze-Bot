module.exports = {
	name: 'ping',
	description: 'ping!',
	async execute(message, args) {
        
        const msg = await message.channel.send(`Pinging....`);
		msg.edit(`Pong!\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms`);

	},
};