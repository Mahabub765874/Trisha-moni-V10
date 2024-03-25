module.exports.config = {
  name: "janu",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Rahad",
  description: "fun",
  category: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = ["Yes my love bolo 😘💋",];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(`${name},\n ${rand}`, event.threadID, event.messageID);
    const res = await axios.get(`http://nl2-4.deploy.sbs:2016/sim?reply=${prompt}`);
    console.log(res.data);
    const respond = res.data.message;
    
    return api.sendMessage({
        body: respond
    }, event.threadID, event.messageID);
};
