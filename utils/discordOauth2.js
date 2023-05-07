const DiscordOauth2 = require("discord-oauth2");
const config = require("../config.json")


function Auth() {

    const oauth = new DiscordOauth2({
        clientId: config.discord.client_id,
        clientSecret: config.discord.nclient_secret,
        redirectUri: config.discord.url
    });

}

module.exports.Auth = Auth;