module.exports.config = {
  name: "পরিচয়", 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran Ahmed",
  description: "example",
  prefix: false,
  category: "Fun", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["Mahabub"] !== "undefined" && thread["Mahabur"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `#পরিচয়-পর্ব ! 😚🤙

࿐❥ আসসালামু আলাইকুম ! 🥰

࿐❥ 𝑵𝒂𝒎𝒆 :- 𝗠𝗔𝗛𝗔𝗕𝗨𝗕 𝗥𝗔𝗛𝗠𝗔𝗡 🫣😚

࿐❥ From:- 🌺𝗛𝗔𝗖𝗞𝗘𝗥𝗦࿐❥𝐓𝐞𝐚𝐦🌺

࿐❥ জন্মস্থানঃ কুন্দগ্ৰাম, আদমদীঘি, বগুড়া, বর্তমান সেখানেই থাকি !

࿐❥ পড়াশোনাঃ (Scc Batch 2024) 😇

࿐❥  পরিবারের ছোট ছেলে  ! 😅

࿐❥ বয়স :17+🙈

࿐❥ Birthday 11/February/......... 🌺

࿐❥ উচ্চতা :  5'9" 😷

࿐❥ ব্লাড গ্রুপঃ AB+🤧

࿐❥ প্রিয় রং : Black /Blue 🥀

࿐❥ প্রিয় স্থানঃ Facebook / Ludo Game 😘

࿐❥ প্রিয় কাজ : Coding/Gaming 🥵

࿐❥ প্রিয় মানুষ : আম্মু/আব্বু//বড় ভাই/বড় বোন )😘

◄⃣⃢⃣🌺 ༄𝐌𝐀𝐇𝐀𝐁𝐔𝐁 𝐑𝐀𝐇𝐌𝐀𝐍シ︎ 🌺⃣⃢⃣►`
  }
  // Gọi bot
  var arr = ["পরিচয়"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "hi thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["mahabub"] == "MAHABUB" || data["MAHABUB"] == true) data["MAHABUB"] = false;
  else data["MAHABUB"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["🥰"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
  }
