module.exports = {
	name: 'coin',
	description: 'flips a coin!',
	execute(message, args) {
		message.channel.send("You flip a coin, It's " + flipsACoin());
	},
};

function flipsACoin(){
    let side = Math.floor(Math.random() * 2 + 1);
    if(side == 1){
        return "Heads!"
    }else if (side == 2){
        return "Tails!"
    }
}