module.exports = {
	name: 'meme',
	description: 'sends a meme',
	async execute(message, args) {
        
        const snekfetch = require('snekfetch');
        try{
			const { body } = await snekfetch
				.get('https://www.reddit.com/u/kerdaloo/m/dankmemer/top.json?sort=top&t=week')
				.query({ limit: 800 });
			const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
			if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
				const randomnumber = Math.floor(Math.random() * allowed.length)
				message.channel.send(allowed[randomnumber].data.url)  
		} catch (err){
			return console.log(err);
		}	

	},
};