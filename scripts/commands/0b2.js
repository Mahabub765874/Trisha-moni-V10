module.exports.config = {
  name: "bing", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
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

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    const key = this.config.credits;
    if (!prompt) return api.sendMessage('use : /bing cat', event.threadID, event.messageID); 

    const rndm = ['19X2XFTTE4-cojwOibT8Xc7Y3ChOLRd7f9RbCSUmAHahcmc6bBDFnCJgTZNmbNqtzy_iRsHiE1n7jnZN9PJ8CmEIietnz6ffqWyyhMz4M470Y49SVrvCmAsOJOpKv12WmknhFcsXXOO5kg_SrFXxobwLBjZqB9gf9L9UZxVqBweihme8yEOudSqqVw_hKRoupV_E4-gXzba0EakW7XlpkVg','19X2XFTTE4-cojwOibT8Xc7Y3ChOLRd7f9RbCSUmAHahcmc6bBDFnCJgTZNmbNqtzy_iRsHiE1n7jnZN9PJ8CmEIietnz6ffqWyyhMz4M470Y49SVrvCmAsOJOpKv12WmknhFcsXXOO5kg_SrFXxobwLBjZqB9gf9L9UZxVqBweihme8yEOudSqqVw_hKRoupV_E4-gXzba0EakW7XlpkVg']; //paste your cookie
    var cookie = rndm[Math.floor(Math.random() * rndm.length)];

    const res = await axios.get(`https://bing-imran.onrender.com/bing-img?prompt=${encodeURIComponent(prompt)}&cookie=${cookie}`);

    console.log(res.data);
    const data = res.data.result;
    const numberSearch = data.length;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
        let path = __dirname + `/cache/${num += 1}.jpg`;
        let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
        imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    await api.sendMessage({
        attachment: imgData,
        body: "Bing Search Result\n\nPrompt: " + prompt + "\n\n#Number of Images: " + numberSearch
    }, event.threadID, event.messageID); 

    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`);
    }
};
