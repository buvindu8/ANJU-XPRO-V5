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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVpM2txTzRIRzBkcHRDTkN2V25ieUxhR0FlaHNUMnNMSkJzZHppeDRsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkNDS3dGNWIxVkdMT01yRzc1RGlzT1RkcDRybUtkWXhNaTl3cm9tV3FEbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBT290Sy8wNjVlTVBVYm9RUnQvbWxoSnArZmxnWGdEMzRBT2ZqMmM1YlhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQlBxNW8vSGlVb0RYL1hHeVZWRTZBZHF5M0hIaFZEUFVUc0M2TkZRUmdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOQURGc3BtdXozWVpydXg4c0J4TTRiNWdRNUpzZ2hmUlNnaWthbVJURm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdsTHBPMkhkNTZOeE9Xb2hsTGpXUi8waUwybklFZDdmczFkVXRoMk5GaTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFJbW5JVkxYRlp2K1ErRGV5dUxnSDhublJqeVh4QUE2MWRJWHg4aVVFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzBiR2dzYVZiWDFWaEJpYzhjMnJHZmFGT2h6Nk5SZ3RvdEVMK0RnNE5oQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhWRlQ5RU5KZmJTR0tZbGZJNEpsM2k5SmlZdGtIOVpHLzNGZ29kMWt2MVJJM1A0Q0VGcnNGMkNBSEVyR04xN0VTajBYczloa0hybGVJanhRMTFsNWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IlJXQmRqMkVtNVRHY0tUcWdVUmNoNHl1dHNYZlF1bDhTaUF6NG5Ud2Izdzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJoMFlxSjZ2UnFlcTV2b2swM0Y5QXciLCJwaG9uZUlkIjoiNzkzMGU5NDYtYjQ4Yi00NWY3LTkxN2UtZjEwNjc4YjU5YzUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlkZ3BuZk9KVWJJTzArTHVpOWQxNlJXVG5uUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTy8zVzNFTlBja0g3NzNFR1RrOVdWaHFHWkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkI4TTVTRzgiLCJtZSI6eyJpZCI6Ijk0NzY0NzY2OTczOjczQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzYxMDM1MTE4NzE1Mjk6NzNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNQ09vY0FDRUsyMXFzSUdHRlVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwM1M3YmJ4QmpPeUpHNVoxaHJta2Y0WnNRMHEzRTY5WlgydTh3NXlqekFBPSIsImFjY291bnRTaWduYXR1cmUiOiJVbWRnekxyRDRaMlZOZWZlbFkwSjFqc051SlpOSTV3dWlucFpJRDAvRWUvY1F4ZUtxeFBhMXZ6b2x1eXRJMjhRek5qNGs2bXd4ZEhUbUJZelk3Vk5Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibkMrMjNNSHQzMlV4SWdrNWJpV3R1T3prRFZ5QmEybTBxVzBFSGR0cS9kd3JmbnRFcGwydEhrU1NGcXVMdVlTRStXd2tjTGR6cVJMeG9JV1dUVnR6Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDc2Njk3Mzo3M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZDB1MjI4UVl6c2lSdVdkWWE1cEgrR2JFTkt0eE92V1Y5cnZNT2NvOHdBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk3MTk3MzgsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9dz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGJVTnJWWnRoZnJyRGI4b3Nzdkl4OTZTcXNObGRSNUFtSWRFWlk3b21RTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySmF5SmVpTXluT1NwTUs0bkh2YXlFZmo5TUdhcFFGS1BiMHBMV3lteW1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTcnRraTJjc0xZc0l4b2FrdkdmejhOMmIvZGZGTjZEQmQvd1h6Z25YSzN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhGTmZJNkhyY2hjMk1TK2J2QksrKzVQWXVXUTlKM3pFQVlrc0FOMS8yMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZDVWszWVNGL0E2OTlUNU4xRDR5blQ1YkRDYmMzWkpudTVKNlFWSHYzV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUgwY2FKTFlaNmYvS2h1ektwaERQS2V3dHB0dFVRMnVTRDBQc2dPZ3Vudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFdYbEIvSzFiNGFzZEttYmpnZnFkQXMzR2ZIdE5rT3NHU1FoOGI1THhVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNjUHk1WGlXaVFXaGpjMFRTaE5qbyszbTlHa3dsTzJTa3BlditmUmtGK01pcGUyWWJJbDdGRVloTTlCS1BaV3pTME9YYmZvMzJ4YXZnN3dVVXlTT2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6IkM0ZEFDajY0UzMreTlaTzNydTdHMmhvSDIwemsyKzkwVzVRWjkwbDhsWTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InB6S25MYkh6U2lpcFh5TTNDWlAwUkEiLCJwaG9uZUlkIjoiOWQyNGQzM2QtY2ZhZC00NWU0LWI2ZmMtMWQzODQ2NzU3Y2ZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktnV2JLUFBaZDZaTWdOT2F0U0U0dngyNFF1VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZW16OFp1K2t2V2hpenlnRy85ZHVwNTlXRGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0pTWFdMVzYiLCJtZSI6eyJpZCI6Ijk0NzY0NzY2OTczOjcyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzYxMDM1MTE4NzE1Mjk6NzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNQ09vY0FDRU9HQ21jSUdHRlFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwM1M3YmJ4QmpPeUpHNVoxaHJta2Y0WnNRMHEzRTY5WlgydTh3NXlqekFBPSIsImFjY291bnRTaWduYXR1cmUiOiJ1enltNUNjaVNIRmhHRnpLb2FsN1JxYnhZcHRIdWhIWnZnekZJbjIrQmNFMmc1Z0tIT0FuczliWHJvOUhVUW9yVlg4cTFMM2dtRzdzTitVUUpUSVVDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNnhTbUhobDllZXVRemZkMFROSzhhQ05uTWdPanRzdXRINC9tNzE1OW9tb0RYRDVnRmJZTXYzRlBua0t4YlhZZnA3amJUaGNDNlpqaW5TaGY5UFdqaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDc2Njk3Mzo3MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZDB1MjI4UVl6c2lSdVdkWWE1cEgrR2JFTkt0eE92V1Y5cnZNT2NvOHdBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk0MzQ3MzQsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnVUIn0=",
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
