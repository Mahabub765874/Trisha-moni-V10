module.exports.config = {
  name: "anime", 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran Ahmed_X_Mahabub Rahman",
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

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["༒︎𝐑𝐀𝐍𝐃𝐎𝐌 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎༒︎"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

    "https://drive.google.com/uc?id=1DQPkM5wU2q74KFOqhcwrnlVsPJx81tR0",
    "https://drive.google.com/uc?id=1DXfy1D0bxTlTM0g0jfTZBBEAP5CI9VvW",
    "https://drive.google.com/uc?id=1-5ySZza9gL2EMiyb9ro_qy_JP_egBUHi",
    "https://drive.google.com/uc?id=1-A5cxY9NV7GxqlMoItAsZyYG4xKTDvRS",
    "https://drive.google.com/uc?id=1-5ySZza9gL2EMiyb9ro_qy_JP_egBUHi",
    "https://drive.google.com/uc?id=1-71QF5wQaQy6N_JFVRYbHeKJxRX6ryXp",
    "https://drive.google.com/uc?id=16BVDbEXqihhNQd2iVmZ4ZXkcvZ-ZtmfJ",
    "https://drive.google.com/uc?id=16UqkKkXtR4ZpF8-GkvgvmdmOkICD9NS5",
    "https://drive.google.com/uc?id=16UbxxGQ2_PmTVuyWsTDuP4F4uAfxye0C",
    "https://i.imgur.com/KtJShbH.mp4",
    "https://i.imgur.com/rq2mHA6.mp4",
    "https://i.imgur.com/TMIzZxx.mp4",
    "https://i.imgur.com/S59NBEV.mp4",
    "https://i.imgur.com/tad0Qma.mp4",
    "https://i.imgur.com/mAiqLHs.mp4"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
