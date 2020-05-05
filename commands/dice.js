module.exports = {
	name: 'dice',
	description: 'Rolls a 6 faced die',
	execute(message, args) {
		message.channel.send("You roll a die, It's a: " + rollDice());
	},
};

function rollDice(){
    let dice = Math.floor(Math.random() * 6 + 1);
    return dice;
}