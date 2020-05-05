module.exports = {
	name: 'help',
	description: 'sends commands list',
	execute(message, args) {
		message.react('🤖');
		const fs = require('fs');
		const path = "./commands/help.txt";
		const path2 = "./commands/audiohelp.txt"
		const content = fs.readFileSync(path, 'utf-8');
		const content2 = fs.readFileSync(path2, 'utf-8');
		message.channel.send(content);
		message.channel.send(content2);
	},
};