module.exports = {
	name: 'kick',
	description: 'kicks a member',
	execute(message, args) {
        
        var member = message.mentions.members.first();
        if(message.member.hasPermission('KICK_MEMBERS')){
            if (!message.mentions.users.size){
            	return message.reply('Who do you want to kick?');
        	}else{
                member.kick();
                message.channel.send(member.displayName + ' has been successfully kicked from the server!')
            }
        }else{
            message.reply('You do not have permission to kick members.');
        }

	},
};