module.exports.config = {
  name: "🙂", 
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
   var hi = ["━╬٨ﮩﮩـﮩﮩ٨ـ💔٨ـﮩ٨ـﮩﮩ٨╬━"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://i.imgur.com/bEywUGP.mp4",
"https://i.imgur.com/vl4ZznW.mp4",
"https://i.imgur.com/B2sQMJ3.mp4",
"https://i.imgur.com/PXHwuzw.mp4",
"https://i.imgur.com/ZIR1MSP.mp4",
"https://i.imgur.com/zokuM2t.mp4",
"https://i.imgur.com/8mRhKeF.mp4",
"https://i.imgur.com/8O89NlF.mp4",
"https://i.imgur.com/KxLdx5Z.mp4",
"https://i.imgur.com/n3r8emF.mp4",
"https://i.imgur.com/Um8WMAk.mp4",
"https://i.imgur.com/Ejm8TFf.mp4",
"https://i.imgur.com/I2UVfpE.mp4",
"https://i.imgur.com/PQe775i.mp4",
"https://i.imgur.com/pL1IrRC.mp4",
"https://i.imgur.com/uKhwIVZ.mp4",
"https://i.imgur.com/aGcjw7t.mp4",
"https://i.imgur.com/RG4jgIt.mp4",
"https://i.imgur.com/pHQ2F32.mp4",
"https://i.imgur.com/ASvx7Uy.mp4"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
             
