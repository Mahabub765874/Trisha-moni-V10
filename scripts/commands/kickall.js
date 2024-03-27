module.exports.config = {
  name: "kick",
  version: "1.0.0",
  permission: 2,
  credits: "Khánh Milo",
  description: "Kick out all the member inside of the group.",
  category: "group",
  usages: "[]",
  cooldowns: 3,
  prefix: true
};

module.exports.run = function({ api, event }) {
	var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("Đã có lỗi xảy ra!",event.threadID);
		if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Need group admin rights\Please add and try again!', event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("You must tag the person to kick",event.threadID);
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	})
      }
