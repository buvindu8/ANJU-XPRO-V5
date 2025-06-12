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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0k4TGswbG9iN2dBdlBrcExkVEo0VWhkOVZqZHI3aVplSkJWQVRxN2VFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDhETHc3bU5OZVRPb2VJMmdKWkZzaUpEcW5zelgzVElHRlcyVzg2OVlWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTDl4R1Z0RjFFTnpoQ1A1UDlJVXAvay91ZTlGaFJIMWxFMnl6YTA1Y2tRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqMjBDODlGS1UyWmJxdzBnM2MxQ1hpZGtMZGd0ZXA2NGpVM2tUdFdnT0Y0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNBSjBaMXAxbUVSU0NKSmV6Zkw1cXJyaVRxRE1zdy90dllvK3lZdSt4azA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMrY2xFU2JYcmV3S3hmV0NnS0FzS01YM1FDdXBBVVI1djlaQ0pMN1ZKaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUNOcDAxV2RwWUQxM1A5Yk9Fckg0QnZjTXg0TzJxdkRFRC9tdDZMWk5FMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk1VdE52YmlVWXlmZnVUQ2VuVHc2ZUllcmJleXZMT3hZVGtlR0FVRGNrcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLWGE5aWhoUG83dW03anZ0SXc2aDltNm1OUWZCNHpwRVc0SFNiMjMyZ2hvVmF5aGNxdVpuNG9RWnk5am1UZkM1TnNieU1IRzlsUDVFZllha1NMSkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6InJwR2pyZFdjS3hGTGRmOFBOa0JEdjV1ZzZMakx4U055T01DdmdnWjhCZ2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inlvbk5mTy1pU1BlSVRaMnlPYVI0WlEiLCJwaG9uZUlkIjoiYjBmMzVhZjAtNmUxYi00MTIzLThjNTQtYTUxMTA3NTVmZTIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFiTlVYNm9pVGJueFlqMlFOZENWbFRFY0MrRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmWEFYLzh0WnBUL3pRT1JaU2lLZDNYQ2RaNG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1dBN0VNU1QiLCJtZSI6eyJpZCI6Ijk0NzY0NzY2OTczOjc0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzYxMDM1MTE4NzE1Mjk6NzRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNQ09vY0FDRUo2M3FzSUdHRllnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwM1M3YmJ4QmpPeUpHNVoxaHJta2Y0WnNRMHEzRTY5WlgydTh3NXlqekFBPSIsImFjY291bnRTaWduYXR1cmUiOiJQRG00ZXNvTGhoMjVuTWFKS1RaMERhMXZJd3FrNEIvbnhQMmJzTjl6TE5PaFQ5RjFOYXc0bnVwY3NzT0k0OFRXZEErNS94OUFMWXFtUFdQV0g5UEVEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidGlqMnNRQ21VK2ZqaTJKcnd2UklXeWVJeXpoemZxVmZIVTc0MmRKS0t5cDNqNzVVZ3NwLzd3T000bHIrTTdCaVZiM0crdlQ3TDA4cmk4eG8zSXFOREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDc2Njk3Mzo3NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZDB1MjI4UVl6c2lSdVdkWWE1cEgrR2JFTkt0eE92V1Y5cnZNT2NvOHdBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk3MTk5ODAsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
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
