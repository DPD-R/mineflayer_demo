const mineflayer = require('mineflayer');
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook('***') 

// DPDR
function start() {
  const bot = mineflayer.createBot({
      host: '***',
      port: 25565,
      username: '***',
      password: '***',
      version: '1.18', 
      auth: 'microsoft'
    })


// Spawn the bot
bot.once('login', () => {
    
})
// Send the notification to the console & Discord server
bot.once('spawn', async () => {
    
    setTimeout(() => {
      bot.setControlState('forward', true)
    }, 1000)

    hook.success(`${bot.username} has sucessfully logged in!`)

})

async function dig () {
    let target
    if (bot.targetDigBlock) {
    } else {
      target = bot.blockAtCursor(2)
      if (target && bot.canDigBlock(target)) {
        try {
          await bot.dig(target, "ignore", "auto");
        } catch (err) {
          console.log(err.stack)
        }
      } else {
      }
    }
  }

bot.on('spawn' , async () => {
    await bot.waitForChunksToLoad()
    setInterval(dig, 25)
    
})


// If the bot is kicked, the notification will be sent to the Discord server
bot.on('kicked', (kicked) => {
    hook.error(`\n@here ${bot.username} has been kicked. Reason: ` + kicked)

})
// If bot encounters an error, it'll send the notification to the Discord server
bot.once('error', (error) => {
    hook.error(`\n@here ${bot.username} has disconnected. Reason: ` + error)

})
// If the bot dies, the notification will be sent to the Discord server
bot.on('death', () => {
    hook.warning(`\n@here ${bot.username} has died. `)
})
// If the bot disconnects, the notification will be sent to the Discord server
bot.once('end', (reason) => {
    hook.error(`\n@here bot has ended. Reason: ` + reason)

})


}

// Start the Disord bot and the Minecraft bot
start();
