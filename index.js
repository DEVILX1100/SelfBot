//Self Bot by DEVIL..
const { keep_alive } = require("./keep_alive");
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
let token = "PUT YOUR ACCOUNT TOKEN HERE";
let BotVersion = "Devil Op";



client.on('ready', () => {
    setInterval(() => {

        const statuses = [
            `1ST STATUS`,
            `2ND STATUS`,
            "MAIN STATUS", // status
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)] // Chooses a random list from statuses and puts it into a variable.
        client.user.setActivity(status, { type: "STREAMING" }) // Status changer - WATCHING / LISTENING / STREAMING / DND / ONLINE

    }, 

            2000) // Time for status to change - Recommended  = 20,000 (20 Seconds) - API doesn't really allow less values but it will work

});

client.login(token)
