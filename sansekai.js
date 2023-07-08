const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys');
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const { Configuration, OpenAIApi } = require("openai");
const axios = require('axios');
let setting = require('./key.json');

// Kode lainnya di sini




module.exports = sansekai = async (client, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'imageMessage') ? m.message.imageMessage.caption : (m.mtype === 'videoMessage') ? m.message.videoMessage.caption : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype === 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '';
    var budy = (typeof m.text === 'string' ? m.text : '');
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith('.', '#', '/');
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.jid);
    const itsMe = m.sender === botNumber ? true : false;
    let text = q = args.join(" ");
    const arg = budy.trim().substring(budy.indexOf(' ') + 1);
    const arg1 = arg.trim().substring(arg.indexOf(' ') + 1);

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
    const riki = budy;
    const words = riki.split(' '); // Memisahkan teks menjadi array kata
    words.shift(); // Menghapus kata pertama dari array

    const teksnya = words.join(' '); // Menggabungkan kembali array kata menjadi teks

    // Output: "teks yang ingin diubah"
    const moment = require('moment-timezone');

    const waktu = () => {
      const waktuWIB = moment().tz('Asia/Jakarta');
      const milidetik = waktuWIB.millisecond();
      const detik = waktuWIB.second();
      const menit = waktuWIB.minute();
      const jam = waktuWIB.hour();
      const tanggal = waktuWIB.date();
      const bulan = waktuWIB.month() + 1; // Perhatikan bahwa bulan dimulai dari 0, jadi perlu ditambahkan 1
      const tahun = waktuWIB.year();

      return `${milidetik} ms ${detik} detik ${menit} menit ${jam} jam ${tanggal}/${bulan}/${tahun}`;
    };

    // Output: "234 ms 45 detik 12 menit 10 jam 24/5/2023"
    function generateRandomString(length) {
      const characters = waktu();
      let result = '';

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      return result;
    }

    const randomString = generateRandomString(8);


    const cheerio = require('cheerio');
    const axios = require('axios');

    const url = `https://id.search.yahoo.com/search?ei=UTF-8&pvid=ySFm2TEwLjLN7xTYYg3TNgJjMTAzLgAAAABRmqFR&gprid=&fr=sfp&fr2=sa-gp&p=${teksnya}`;

    const texts = ["apasi ", "Apa  Sayang `Huekk`", "diem ", "apasi manggil manggil punya lu kecil juga"]; // Daftar teks yang mungkin acak

    function getRandomText() {
      const randomIndex = Math.floor(Math.random() * texts.length); // Menghasilkan indeks acak dari array
      return texts[randomIndex]; // Mengembalikan teks acak
    }

    const rrd = getRandomText(); // Menyimpan teks acak dalam variabel "rrd"
    const anj = `乂 *A I  M E N U*

   ☍ .ai (quary)
   ☍ .aisearch (quary)     
   ☍ .search (quary)

乂 *M A I N  M E N U*

   ☍ .ping
   ☍ .readmore 

乂 *F U N  M E N U*

   ☍ .apakah (quary)
   ☍ .simi (quary)`

    // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => { }) : '';
    const groupName = m.isGroup ? groupMetadata.subject : '';

    // Push Message To Console
    let argsLog = (budy.length > 30) ? `${q.substring(0, 30)}...` : budy;

    const googleIt = require('google-it');


    if (setting.autoAI) {
      // Push Message To Console && Auto Read
      if (argsLog && !m.isGroup) {
        console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(argsLog, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`));
      } else if (argsLog && m.isGroup) {
        console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(argsLog, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`), chalk.blueBright('IN'), chalk.green(groupName));
      }
    } else if (!setting.autoAI) {
      if (isCmd2 && !m.isGroup) {
        console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(argsLog, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`));
      } else if (isCmd2 && m.isGroup) {
        console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(argsLog, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`), chalk.blueBright('IN'), chalk.green(groupName));
      }
    }

    if (isCmd2) {
      switch (command) {
case 'ping':
  const os = require('os');
  const si = require('systeminformation');

  // Menampilkan informasi memori
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  let memoryInfo = 'Total Memory: ' + formatBytes(totalMemory) + '\n' +
                   'Free Memory: ' + formatBytes(freeMemory) + '\n';

  // Menampilkan informasi penyimpanan
  si.fsSize()
    .then((fsSize) => {
      fsSize.forEach((fs) => {
        memoryInfo += 'Drive: ' + fs.fs + '\n' +
                      'Size: ' + formatBytes(fs.size) + '\n' +
                      'Used: ' + formatBytes(fs.used) + '\n' +
                      'Available: ' + formatBytes(fs.available) + '\n';
      });

      // Menampilkan informasi CPU
      const cpuModel = os.cpus()[0].model;
      const cpuCores = os.cpus().length;
      let cpuInfo = 'CPU Model: ' + cpuModel + '\n' +
                    'CPU Cores: ' + cpuCores + '\n';

      // Menampilkan kecepatan internet

      // Gabungkan semua informasi menjadi satu reply
      reply(memoryInfo + cpuInfo);
    })
    .catch((error) => {
      console.error('Error retrieving file system information:', error);
    });

  // Fungsi untuk mengubah ukuran byte menjadi format yang lebih mudah dibaca
  function formatBytes(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
  }
  break;


        case 'apakah':
          function kerangAjaib(pertanyaan) {
  const jawaban = [
    'Ya',
    'Tidak',
    'Kayaknya',
    'Mungkin',
    'Gak bakal',
    'Jan berharap',
    'Iyya',
    'Silahkan tanya lagi'
  ];

  const randomIndex = Math.floor(Math.random() * jawaban.length);
  const hasil = jawaban[randomIndex];

  reply(hasil);
}

// Contoh penggunaan
kerangAjaib(teksnya);
break ;

        case 'simi':
          try {
            const url = `https://defensivediscretelists.ikyystore3.repl.co/?q=${teksnya}`;
            const response = await axios.get(url); // Menambahkan permintaan HTTP GET menggunakan axios atau library serupa
            const json = response.data;
            if (json) {
              reply(`${json}\n\n*©ShanAI*`); // Mengubah json.success menjadi json.answer untuk menampilkan jawaban
            } else {
              reply('error');
            }
          } catch (error) {
            reply(error.message); // Mengubah rrd menjadi error.message untuk menampilkan pesan kesalahan yang lebih spesifik
          }
          break;


        case 'readmore':
          reply('͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏')
          break;
        case 'aisearch':
        case 'search':
          reply('typing...')

          const response = await axios.get(url);
          const $ = cheerio.load(response.data);


          const articles1 = $('.compText').slice(0, 3).map((_, element) =>
            $(element).text().trim()).get();
          const artikel1 = articles1.join('\n');

          const anjing = artikel1;
          const lines = anjing.split('\n'); // Memisahkan teks menjadi array baris

          const filteredLines = lines
            .map(line => line.split('·')[1]) // Mengambil teks setelah tanda "·"
            .filter(Boolean); // Menghapus baris kosong

          const mergedText = filteredLines.join('dan'); // Menggabungkan baris menjadi teks dengan tambahan " dan "

          const google = '```' + mergedText + '```';


          reply(`*Berikut Hasil Dari : ${teksnya}*\n\n${google}\n\n`)
          break;
        case 'menu':

          reply(`*Selamat datang, kami menghadirkan menu menarik untuk Anda:*


${anj}

      
          
          
*Tertarik untuk mengetahui lebih lanjut? Ayo bergabunglah dengan kami di grup WhatsApp resmi kami di https://chat.whatsapp.com/IpWP0AiNMLTAFKoVGaiMKg*`);
          break;

case 'ai':
  reply('typing..');

  const riki = waktu() + randomString;
  console.log(riki);

  async function sendWebhookMessage(sender, teksnya) {
    const webhookUrl = 'https://webhook.botika.online/webhook/';

    try {
      async function searchOnGoogle(text) {
        const url = 'https://google.com/search?q=' + encodeURIComponent(text);
        const search = await googleIt({ query: text, limit: 5 });
        let msg = search.map(({ title, link, snippet }) => {
          return `*${title}*\n_${link}_\n_${snippet}_`;
        }).join('\n\n');
        const google = msg;
        return google;
      }

      const yahooArticles = await searchOnGoogle(teksnya);

      const payload = {
        app: {
          id: "b8d0lgyj1ie1684654334077",
          time: Date.now(),
          data: {
            sender: {
              id: sender
            },
            message: [
              {
                id: riki,
                time: Date.now(),
                type: "text",
                value: `Artikel-artikel ditambahkan secara otomatis oleh sistem AI:

\`\`\`
${yahooArticles}
\`\`\`

Berikut ini adalah pertanyaan dari pengguna kecerdasan buatan:.

"${pushname}" :
\`\`\`
${teksnya}
\`\`\`
`         
              }
            ]
          }
        }
      };

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fbe3d5e1-00a8-4328-8482-53a09a2433e2'
      };

      const webhookResponse = await axios.post(webhookUrl, payload, { headers });
      const { data, status } = webhookResponse;
      if (status === 200) {
        const messages = data.app.data.message;
        if (Array.isArray(messages)) {
          const responseMessages = messages.map(message => message.value);
          let replyMessage = responseMessages.join('\n');

          if (/(<BR>)/.test(replyMessage)) {
            let newReplyMessage = replyMessage.replace(/<BR>/g, '\n');
            let replyMessages = newReplyMessage.split('\n');
            for (const [index, message] of replyMessages.entries()) {
              setTimeout(async () => {
                await reply(message);
              }, index * 2000); // Memberikan jeda 1 detik (1000 milidetik) antara pengiriman pesan
            }
          } else {
            reply('\n\n' + replyMessage);
          }

        } else {
          reply("iya ada yang bisa azzbot bantu");
        }
      } else {
        reply("server down");
      }
    } catch (error) {
      console.log(error);
      reply("Terjadi kesalahan saat memproses permintaan");
    }
  }

  if (arg1) {
    const messageContent = teksnya;
    await sendWebhookMessage(sender, messageContent);
  } else {
    reply("Ada Yang Biasa AzzBot Bantu Kak");
  }

  break;




       
        default:
          if (isCmd2 && budy.toLowerCase() !== undefined) {
            if (m.chat.endsWith('broadcast') || m.isBaileys || !budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              console.log(chalk.black(chalk.bgRed('[ ERROR ]')), color('command', 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`));
              console.log(color('└'), color(`"${argsLog}"`, 'red'), chalk.yellow('is not a registered command!'));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              console.log(chalk.black(chalk.bgRed('[ ERROR ]')), color('command', 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`), chalk.blueBright('IN'), chalk.green(groupName));
              console.log(color('└'), color(`"${argsLog}"`, 'red'), chalk.yellow('is not a registered command!'));
            }
          }
          break;
      }
    } else if (!isCmd2) {
      if (!m.isGroup) {
        console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(budy, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`));
      } else if (m.isGroup) {
        console.log(chalk.black(chalk.bgWhite('[ LOGS ]')), color(budy, 'turquoise'), chalk.magenta('From'), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace('@s.whatsapp.net', '')} ]`), chalk.blueBright('IN'), chalk.green(groupName));
      }
    }
  } catch (err) {
    console.log(err);
  }
};