module.exports = {
	name: 'roulette',
	description: 'kick roulette!',
	execute(message, args) {

		let randNum1 = Math.floor(Math.random()*6+1);
		let randNum2 = Math.floor(Math.random()*6+1);
		var member = message.mentions.members.first();
		if(message.member.hasPermission('KICK_MEMBERS')){
        	if (!message.mentions.users.size){
            	return message.reply('Who do want to try to kick?');
        	}else if(randNum1 === randNum2){
				member.kick();
				message.channel.send(member.displayName + ' has been kicked');
			}else{
				message.channel.send(member.displayName + ' survived this round.');
			}
		}else{
			message.channel.send("You don't have permission to kick members");
		}

	},
};