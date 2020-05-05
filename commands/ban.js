module.exports = {
	name: 'ban',
	description: 'bans a user',
	execute(message, args) {
        
        var member = message.mentions.members.first();
        if(message.member.hasPermission('BAN_MEMBERS')){
            if (!message.mentions.users.size){
            	return message.reply('Who do you want to ban?');
        	}else{
                member.ban();
                message.channel.send(member.displayName + ' has been successfully banned from the server!')
            }
        }else{
            message.reply("You do not have permission to ban members.")
        }

	},
};