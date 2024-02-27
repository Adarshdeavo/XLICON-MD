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
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUMra1paOXZRNnd3Ry9KaVoyS1pjcHE3d3A0SUpIU0hXY0NCd0xadXVIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGZEZDVZZ3MvNnNOenBIa2VEWUs1bUVtMDBDaDZtQTlxS2k3NTVOYWswRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTHIrdkpFRlA0bi92NUFnNFA2VytlTVdxTDcxY1YyMUxIWHU5MjBSY21VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXeWtDbVFHQkxjajZpTW9GUE9YQ2dTbEluQVRSUTZpSWJtdDJEY01RU0g0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDM1RvaHEyMlAvcldDOXp0WDdIWXVodUtXYkNHQndCR0lmRUJydTZnbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBmQXNLZGVCRGlNclBuazUzdjVsNzBnU0g1VUFlYTUrTWh3aWY4NFRmRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9mektPbUd0V3UyTW80R3lUZVJxVU1XN0hOaE5PbW1ZdnFIUUVqRTIxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05FMUw1UjJNSjdudWlkZjg5dHJyNnloeTBMQkNWOHFVWWRHazNibU9URT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii81V0N6QlNNTW00YWNyZFpTcUV4RHM3STg5eG4vbkdpL2loWEZlMTBBTlFEdUhJQXpTbnBtUWFrNy9wOG5mWXdVM1BDUkUydnpQNHp4Z2wrWWNCZWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IlBWU2FZeVYvZ3pVNzJ1eno0NzZaeVFYc1FPLzVzTGMzRjlaZ3RVdnpsRE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNjelUtRlJrUXUtMXVVR2FrMTJ4VFEiLCJwaG9uZUlkIjoiYjZkYTJmYzAtNTk0MC00NTU5LTg5ODgtNDgzZGYzNDU2NGJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ3V0ZVY1ljc3UzSWZZN20vVjBvQThRaXFnND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvK2RYWkhodU1lcEN4QUc2U1Q2R3R1ZzgyUU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1BQMU5GQTciLCJtZSI6eyJpZCI6IjkxNzkwNzczODExMjo4NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJhZGFyc2gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kycXhlZ0ZFUGZUOXE0R0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik43elRlaGx5UFJMcG0rRVdJM21oczd3RzNOcmlDNW14S3p6eHA4L2VkV2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJjYkxYWk9TOStyYXl1R3ZaQTEvQ2xQSFFiT1ErcUxxYmJncWs1bGExSXVmQ29tZUdFN3R6WWoxdTRSUmFyUnk1Z3FTcHVpY2hHSWZtTjFrS1FXRkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlREhVcGk4QWJMWGNDWVp1L1Q3cXJlYmdvRzNsZlZpY2FzWTVabFBYVnUyYXI3eU82M1BoVXgzRUUyVmQyOGRzYkJRNTgxMmVZZ1g2TlVqaWtKaFlqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzkwNzczODExMjo4NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUZTgwM29aY2owUzZadmhGaU41b2JPOEJ0emE0Z3Vac1NzODhhZlAzblZwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA5MDI1Nzg2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUduMSJ9 ",  //PUT Session Id Here, 
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
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
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
