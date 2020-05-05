module.exports = {
	name: 'server',
	description: 'server info',
	execute(message, args) {
		message.channel.send(`**__server Info__**:\nName: ${message.guild.name}\nOwner: ${message.guild.owner}\nTotal members: ${message.guild.memberCount}\nMembers boosting this server: ${message.guild.premiumSubscriptionCount}\nRegion: ${message.guild.region}`);
	},
};