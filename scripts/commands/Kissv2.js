module.exports.config = {
    name: "rv",
    version: "1.0.5",
    permission: 2,
    prefix: true,
    credits: "Nayan",
    description: "𝘿𝙤𝙣'𝙩 𝙨𝙖𝙮 𝙗𝙖𝙙𝙬𝙤𝙧𝙙𝙨 𝙥𝙡𝙚𝙖𝙨𝙚",
    category: "Utility",
    usage: "add [word]",
    cooldowns: 3,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};


	onStart: async function ({ message, event, args, threadsData, api, getLang }) {
		const adminIDs = await threadsData.get(event.threadID, "adminIDs");
		if (!adminIDs.includes(api.getCurrentUserID()))
			return message.reply(getLang("needAdmin"));
		async function kickAndCheckError(uid) {
			try {
				await api.removeUserFromGroup(uid, event.threadID);
			}
			catch (e) {
				message.reply(getLang("needAdmin"));
				return "ERROR";
			}
		}
		if (!args[0]) {
			if (!event.messageReply)
				return message.SyntaxError();
			await kickAndCheckError(event.messageReply.senderID);
		}
		else {
			const uids = Object.keys(event.mentions);
			if (uids.length === 0)
				return message.SyntaxError();
			if (await kickAndCheckError(uids.shift()) === "ERROR")
				return;
			for (const uid of uids)
				api.removeUserFromGroup(uid, event.threadID);
		}
	}
};
