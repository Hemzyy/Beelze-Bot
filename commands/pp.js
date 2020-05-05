module.exports = {
	name: 'pp',
	description: 'measures pp',
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.channel.send(`Your pp size: ` + measure());
        }
        const userList = message.mentions.users.map(user => {
            return `${user.username}'s pp size: `+ measure();
        });
        message.channel.send(userList);
	},
};

function measure(){
    let measures = {
        "0": "8D",
        "1": "8=D",
        "2": "8==D",
        "3":"8===D",
        "4": "8====D",
        "5": "8=====D",
        "6": "8======D",
        "7": "8=======D",
        "8": "8========D",
        "9": "8=========D",
        "10":"8==========D",
        "11":"8===========D",
        "12":"8============D",
        "13":"8=============D",
        "14":"8==============D",
        "15":"8===============D",
        "16":"8================D",
        "17":"8=================D",
        "18":"8==================D",
        "19":"8===================D",
        "20":"8====================D",
        "21":"8=====================D",
        "22":"8======================D",
        "23":"8=======================D",
        "24":"8========================D",
        "25":"8=========================D",
        "26":"8==========================D",
        "27":"8===========================D",
        "28":"8============================D",
        "29":"8=============================D",
        "30":"8==============================D",
    };
    let randNum = Math.floor(Math.random()*31);
    return measures[randNum];
}