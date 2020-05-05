module.exports = {
	name: 'r20',
	description: 'Rolls a 20 faced die',
	execute(message, args) {
		if(rollDice() == 1){
            message.channel.send('You rolled a natural 1.');
        }else if(rollDice() == 20){
            message.channel.send('You rolled a natural 20!');
        }else{
            message.channel.send('You rolled a ' + rollDice());
        }
	},
};

function rollDice(){
    let dice = Math.floor(Math.random() * 20 + 1);
    return dice;
}