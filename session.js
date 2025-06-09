//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFQNjJJOEdkdkozL1dlT0oxZm8yRUhpZS9kOUkvUDh5dEZkd3BtckZrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGJVTnJWWnRoZnJyRGI4b3Nzdkl4OTZTcXNObGRSNUFtSWRFWlk3b21RTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySmF5SmVpTXluT1NwTUs0bkh2YXlFZmo5TUdhcFFGS1BiMHBMV3lteW1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTcnRraTJjc0xZc0l4b2FrdkdmejhOMmIvZGZGTjZEQmQvd1h6Z25YSzN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhGTmZJNkhyY2hjMk1TK2J2QksrKzVQWXVXUTlKM3pFQVlrc0FOMS8yMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZDVWszWVNGL0E2OTlUNU4xRDR5blQ1YkRDYmMzWkpudTVKNlFWSHYzV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUgwY2FKTFlaNmYvS2h1ektwaERQS2V3dHB0dFVRMnVTRDBQc2dPZ3Vudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFdYbEIvSzFiNGFzZEttYmpnZnFkQXMzR2ZIdE5rT3NHU1FoOGI1THhVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNjUHk1WGlXaVFXaGpjMFRTaE5qbyszbTlHa3dsTzJTa3BlditmUmtGK01pcGUyWWJJbDdGRVloTTlCS1BaV3pTME9YYmZvMzJ4YXZnN3dVVXlTT2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6IkM0ZEFDajY0UzMreTlaTzNydTdHMmhvSDIwemsyKzkwVzVRWjkwbDhsWTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InB6S25MYkh6U2lpcFh5TTNDWlAwUkEiLCJwaG9uZUlkIjoiOWQyNGQzM2QtY2ZhZC00NWU0LWI2ZmMtMWQzODQ2NzU3Y2ZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktnV2JLUFBaZDZaTWdOT2F0U0U0dngyNFF1VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZW16OFp1K2t2V2hpenlnRy85ZHVwNTlXRGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0pTWFdMVzYiLCJtZSI6eyJpZCI6Ijk0NzY0NzY2OTczOjcyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzYxMDM1MTE4NzE1Mjk6NzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNQ09vY0FDRU9HQ21jSUdHRlFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwM1M3YmJ4QmpPeUpHNVoxaHJta2Y0WnNRMHEzRTY5WlgydTh3NXlqekFBPSIsImFjY291bnRTaWduYXR1cmUiOiJ1enltNUNjaVNIRmhHRnpLb2FsN1JxYnhZcHRIdWhIWnZnekZJbjIrQmNFMmc1Z0tIT0FuczliWHJvOUhVUW9yVlg4cTFMM2dtRzdzTitVUUpUSVVDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNnhTbUhobDllZXVRemZkMFROSzhhQ05uTWdPanRzdXRINC9tNzE1OW9tb0RYRDVnRmJZTXYzRlBua0t4YlhZZnA3amJUaGNDNlpqaW5TaGY5UFdqaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDc2Njk3Mzo3MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZDB1MjI4UVl6c2lSdVdkWWE1cEgrR2JFTkt0eE92V1Y5cnZNT2NvOHdBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk0MzQ3MzQsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnVUIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94764766973",
  PASSWORD: 
    process.env.PASSWORD || "*86iresha86*",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94764766973", "94764766973"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
