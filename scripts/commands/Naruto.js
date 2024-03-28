module.exports = {
config: {
  name: "naruto",
  version: "1.0.2",
  permission: 0,
  prefix: true,
  credits: "Imran",
  description: "",
  category: "admin",
  usages: "",
    cooldowns: 5,
}
};


  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "naruto") {
      return message.reply({
        body: "hello, add my master Loid.",
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/supUfDQ.jpg")
      });
    }
  }
}
