# MineFlayer Demo

24/7 AFK Miner 


## Deployment

To deploy this project run

```bash
  git clone https://github.com/DPD-R/mineflayer_demo
  cd mineflayer_demo

  - replace webhook with your own
  - add your own credentials on line 10 and 11 and the server IP on line 8

  How to start the bot?
  node worker.js

  How to run bot 24/7 with automatic restarts?

  sudo npm i -g pm2 
  pm2 start worker.js

  crontab -e
  Add new line with the following:
  0 */4 * * *
```
