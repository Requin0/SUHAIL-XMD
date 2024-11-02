const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "693957165";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_20_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA5LFxuICAgICAgICAyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY5LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICA3LFxuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3V1B1VmE3Zk95WUM1dlhqZG5PNHZmUmkxMFZqNHUzWW5VNkphRitnc2xnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfOUlZZ2M3WVItaUVBT1FWMDZmY1pRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyNmJjMDg3LTg3YWYtNDc5Yy05YjRiLTk2YzFhZjRiMDdjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDU4LFxuICAgICAgMjE0LFxuICAgICAgMzIsXG4gICAgICAxNTIsXG4gICAgICAxMTAsXG4gICAgICA5NixcbiAgICAgIDczLFxuICAgICAgMTg5LFxuICAgICAgNDEsXG4gICAgICAyMzQsXG4gICAgICAxMSxcbiAgICAgIDk4LFxuICAgICAgNDcsXG4gICAgICA5NCxcbiAgICAgIDIzNCxcbiAgICAgIDE2NCxcbiAgICAgIDEwOCxcbiAgICAgIDQwLFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgNjAsXG4gICAgICAxMjIsXG4gICAgICAxMTgsXG4gICAgICAxNTMsXG4gICAgICAxNzcsXG4gICAgICAyMjEsXG4gICAgICAxLFxuICAgICAgMjUxLFxuICAgICAgMTQyLFxuICAgICAgMjMwLFxuICAgICAgMTA3LFxuICAgICAgMTQwLFxuICAgICAgMTAzLFxuICAgICAgMzYsXG4gICAgICAzNCxcbiAgICAgIDIwNSxcbiAgICAgIDQ3LFxuICAgICAgMjUzLFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhBTktCR0dTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTM5NTcxNjU6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyMzY3NjA1OTkzNTI4OjUyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6eDFwZ0NFTG0rbWJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM3VTUEJLSWlGU1lVVW92ZlRLc3R6QWhGYmYxSHhPd3NSb1BMY3YyNnZRcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvQnZCbllvL20zT3dxRkR1M3U3Yi9ESWhpeXRUMlFmakIxblRBUU5uampjc3Q3M2t1aXNOb2gzTjRKUDdhNVZudGdENGwxRnhMTlhtbWRyQUlkYmRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYcVRFOFdoYkpKMUJ0VW9kTVRYY2JkVkc5MndKOHVsWFVEYjVGYlFLbG9LTmZKbXk0aURVbzlRQTd2Zm1xMXZZOVN5Tm1idGdBUTF2SDJzTUpOaEtCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTM5NTcxNjU6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDU2Nzk5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9RMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1EwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSVE0WmhRZUVPZTVpYXdVcUJWdTloNkZiSm5UMHVaUGZabk9yOVdSUkFHST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODg2MjYwNTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1MTQyMTc1ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
