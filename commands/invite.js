
module.exports = {
	name: 'invite',
	description: 'sends bot invite link',
	async execute(message, args) {
		const embed = {
			title: 'invite',
			url: 'https://discordapp.com/oauth2/authorize?client_id=700119467295768576&permissions=36826183&scope=bot'
		};
		message.channel.send('Click below to invite Beelze Bot to a server: ');
		message.channel.send({embed: embed});
	},
};