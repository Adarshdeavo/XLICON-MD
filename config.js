const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "917907738112"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '917907738112' 
global.devs = '917907738112';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/OZYtdAP.jpeg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " {"noiseKey":{"private":{"type":"Buffer","data":"SBwBt8URblGCiAdrcdJCbtrJjrPzwS+TLIF99tMtAXk="},"public":{"type":"Buffer","data":"kBCdAW0OKCybgS01nJ5Y2Es17eI9OvF4ZekOzxk1Wkg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ABAXs9XpCw+oWoyH0I9kJP9s/KiT+3Cm0gYA+gLj1nE="},"public":{"type":"Buffer","data":"0V6hmesXc7H3lBNJc/E2ZiZQPPpPaCEVW3F9OPEG/xg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"CMbtiDNmbQj51X6tG1+wTqLKRKBoGiWiyo3wS/JS2Ww="},"public":{"type":"Buffer","data":"R9Bvax2RqYXkySRnNtYpeoKis3kyOadO5cQTT1O1c2E="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"+M1Fvl8V+2CWUEcwlML0Z80QI5tInydbk+DJV79Vi2Q="},"public":{"type":"Buffer","data":"jwfYgAZh5B3BJb14AysRcIHUAu8hwR6l8PJiR70J9Qs="}},"signature":{"type":"Buffer","data":"IUb0mpEU68BWj/4iCH3Hejhq5tLGBdqxHy2XoXe77O2b1mwqlL+nCs1BQTFpsiM2hhoApmbNoIc7h85pXIBBDA=="},"keyId":1},"registrationId":234,"advSecretKey":"Df+8H9LwgvyGvhsG3i31+9lWzjqzcvzQqOEQlXO1oho=","processedHistoryMessages":[{"key":{"remoteJid":"917907738112@s.whatsapp.net","fromMe":true,"id":"16B86266F1CD98BC758A367D9156CEC6"},"messageTimestamp":1708960663},{"key":{"remoteJid":"917907738112@s.whatsapp.net","fromMe":true,"id":"FD59332AD57A795C024FD3104085201C"},"messageTimestamp":1708960663}],"nextPreKeyId":72,"firstUnuploadedPreKeyId":72,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"wXvXoLo4ScGjsvzWgxHDiA","phoneId":"81b3e678-7ff0-4e8b-9a43-0952828baffc","identityId":{"type":"Buffer","data":"wRAW639scBchP0DQXwoyw/ZAnBg="},"registered":true,"backupToken":{"type":"Buffer","data":"wc+uiZeub39gw2XAO3dSdqRLJIc="},"registration":{},"pairingCode":"3GC592LV","me":{"id":"917907738112:84@s.whatsapp.net","name":"adarsh","lid":"131782481559692:84@lid"},"account":{"details":"CI2qxegFEITX8q4GGAQgACgA","accountSignatureKey":"N7zTehlyPRLpm+EWI3mhs7wG3NriC5mxKzzxp8/edWk=","accountSignature":"XZExPkTxOeuP9kN/xjv2REobnmN8thYbFvH7ZkEh+g3ol6fMSnK6jesa4Cr+U78EB+tICEDo2V2mThGpoZ25Dw==","deviceSignature":"yF3ZJlyITpVrtcV833QoGqJdbNaVp4Bs7CP7KzE4VjmqyriHAgGKFKMWC3+GGovd56Ph15XY8Ns+f6lfnUb1CQ=="},"signalIdentities":[{"identifier":{"name":"917907738112:84@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTe803oZcj0S6ZvhFiN5obO8Btza4guZsSs88afP3nVp"}}],"platform":"smba","lastAccountSyncTimestamp":1708961167,"myAppStateKeyId":"AAAAAGn1"}",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "dessa" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'deavo' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? 'null' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
