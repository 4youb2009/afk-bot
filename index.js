const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '_SkyrootCraft.aternos.me',
  port: 51059,
  username: 'AFK_Bot'
})

bot.on('login', () => {
  console.log('✅ AFK Bot دخل السيرفر!')
})

bot.on('end', () => {
  console.log('❌ تم طرد البوت أو السيرفر تقفل')
})

bot.on('error', err => {
  console.log('⚠️ خطأ:', err)
})

