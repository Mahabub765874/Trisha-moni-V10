module.exports.config = {
  name: "mahabub", 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran Ahmed_X_Mahabub Rahman",
  description: "example",
  prefix: true,
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
   var hi = ["~THISH IS MY ADMIN~\n\nNAME: MAHABUB RAHMAN🔰\n\nAGE:17+👀\n\nRELATIONSHIP: PURE SINGLE ULTRA PRO MAX 👌✊\n\n_۵ღ︵🩷🪽 "];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  ""https://i.imgur.com/Mwh9u6a.mp4",","https://drive.google.com/uc?id=1B31nfigyaYEyKhkDeRZNn5Nab8As6NjP","https://drive.google.com/uc?id=1B6ZnpXOkwV1jqjhjGECv3i8Z4lsi0rLb"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
    
