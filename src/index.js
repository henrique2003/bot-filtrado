const express = require('express')
const discord = require('discord.js')
const { config } = require('dotenv')

const app = express()

config()

const bot = new discord.Client()

app.get('/', (req, res) => {
  return res.statusCode(200)
})

app.listen(process.env.PORT || 3333, () => {
  console.log('Server running')
})

bot.login(process.env.TOKEN)

bot.on('ready', () => {
  console.log('Pronto para ser usado')
})

bot.on('message', msg => {
  const message = msg.content.toLowerCase()

  const bannedNames = [
    'filho da puta',
    'filha da puta',
    'caralho',
    'vc é um merda',
    'tomar no seu cu',
    'tomar no cu',
    'seu cu'
  ]

  bannedNames.map(name => {
    if (message.includes(name)) {
      msg.reply('Chingar é muito feio, tente resolver sem o uso de palavões')
    }
  })
})
