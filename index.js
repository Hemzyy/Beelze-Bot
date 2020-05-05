const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client({disableEveryone: true});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Beelze-Bot Online!'); 
	client.user.setActivity(';help',{type:'PLAYING'});
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	//audio command---------------
    if(message.content === ";join"){
        if(message.member.voice.channel){
            const connection = await message.member.voice.channel.join();
			module.exports = {connection};
		}else{
            message.reply('You need to be in a voice channel first.');
        }
    }if(message.content === ";leave"){
		if(message.member.voice.channel){
			const disconnection = await message.member.voice.channel.leave();
		}else{
			message.reply('You need to be in a voice channel first.');
		}
	}
	//----------------------------

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command.');
	}

});

client.login(token);