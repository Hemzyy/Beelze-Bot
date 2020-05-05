module.exports = {
	name: 'purge',
    description: 'deletes messages',
	execute(message, args) {
        const amount = parseInt(args[0], 10);
        if(!amount || amount < 2 || amount > 100){
            return message.reply("Please provide a number between 2 and 100 messages to delete");
        }else{
            if(message.member.hasPermission('MANAGE_MESSAGES')){
                message.channel.bulkDelete(amount + 1, true);
            }else{
                return message.reply("You don't have permission to use this command.");
            }
        }

	},
};