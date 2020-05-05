module.exports = {
	name: 'play',
	description: 'plays audio clips',
	execute(message, args) {
        
        const {OpusEncoder} = require('@discordjs/opus');
        let {connection} = require('./../index.js');
        const clip = args[0];

        if(message.member.voice.channel){
            switch(clip){
                case 'bruh': connection.play('./audio/bruh.mp3');
                break;
                case 'clap': connection.play('./audio/clap.mp3');
                break;
                case 'laugh': connection.play('./audio/laugh.mp3');
                break;
                case 'coffin': connection.play('./audio/coffin_dance.mp3');
                break;
                case 'sarcastic': connection.play('./audio/sarcastic.mp3');
                break;
                default: message.channel.send("audio clip doesn't exist!\ntype ;help to get audio commands.");
            }
        }else{
            message.reply('I need to be in a voice channel first.');
        }

	},
};